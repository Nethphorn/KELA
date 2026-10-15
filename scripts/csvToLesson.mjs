import { readFile, writeFile } from 'node:fs/promises'

const CHOICE_COLUMNS = ['choiceA', 'choiceB', 'choiceC', 'choiceD']
const QUESTION_TYPE = 'multiple-choice'

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  let pos = 0
  while (pos < text.length) {
    const char = text[pos]
    if (inQuotes) {
      if (char === '"' && text[pos + 1] === '"') {
        field += '"'
        pos += 1
      } else if (char === '"') {
        inQuotes = false
      } else {
        field += char
      }
    } else if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[pos + 1] === '\n') {
        pos += 1
      }
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else {
      field += char
    }
    pos += 1
  }
  if (field !== '' || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

function toRecords(rows) {
  const header = rows[0].map((key) => key.trim())
  const records = []
  for (const row of rows.slice(1)) {
    const hasValue = row.some((cell) => cell.trim() !== '')
    if (hasValue) {
      const record = {}
      header.forEach((key, index) => {
        record[key] = (row[index] ?? '').trim()
      })
      records.push(record)
    }
  }
  return records
}

function toChoices(record) {
  return CHOICE_COLUMNS.map((column) => record[column]).filter(
    (value) => value !== undefined && value !== '',
  )
}

function validateQuestion(question, rowNumber) {
  const label = `CSV row ${rowNumber} (id "${question.id}")`
  if (question.id === '') {
    throw new Error(`${label}: missing id`)
  }
  if (question.prompt === '') {
    throw new Error(`${label}: missing prompt`)
  }
  if (question.choices.length < 2) {
    throw new Error(`${label}: needs at least 2 choices`)
  }
  if (question.choices.includes(question.answer) === false) {
    throw new Error(
      `${label}: answer "${question.answer}" is not one of the choices`,
    )
  }
}

function toQuestion(record, index) {
  const question = {
    id: record.id,
    type: QUESTION_TYPE,
    prompt: record.prompt,
    image: null,
    audioText: null,
    choices: toChoices(record),
    answer: record.answer,
  }
  validateQuestion(question, index + 2)
  return question
}

function assertUniqueIds(questions) {
  const seen = new Set()
  questions.forEach((question) => {
    if (seen.has(question.id)) {
      throw new Error(`duplicate question id "${question.id}"`)
    }
    seen.add(question.id)
  })
}

function toLesson(meta, questions) {
  return {
    lessonId: meta.lessonId,
    title: meta.title,
    subject: meta.subject,
    questions,
  }
}

async function main() {
  const [csvPath, metaPath, outPath] = process.argv.slice(2)
  if (
    csvPath === undefined ||
    metaPath === undefined ||
    outPath === undefined
  ) {
    throw new Error(
      'usage: node scripts/csvToLesson.mjs <csv> <meta.json> <out.json>',
    )
  }
  const csvText = await readFile(csvPath, 'utf8')
  const meta = JSON.parse(await readFile(metaPath, 'utf8'))
  const questions = toRecords(parseCsv(csvText)).map(toQuestion)
  assertUniqueIds(questions)
  const lesson = toLesson(meta, questions)
  await writeFile(outPath, `${JSON.stringify(lesson, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${questions.length} questions to ${outPath}`)
}

await main()
