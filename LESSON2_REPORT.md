# Lesson 2 Data — Fractions (មេរៀនទី ២ ៖ ប្រភាគ)

Report for the **lesson-2 data collection** task: gather Lesson 2 content from the
source textbook and store it as structured JSON for the app.

## Objective

Produce a machine-readable dataset for **Lesson 2** so the lesson feature can
load it, generate a randomized multiple-choice session, score it, and finish.

## Source

- A scanned Khmer Grade-2 math textbook (image-based PDF; no usable text layer).
- Lesson 2 in the book is **ប្រភាគ (Fractions)**, on printed pages **7–12**.

## Method

1. Rendered the source pages to images and read them to identify the lesson.
2. Transcribed the lesson's questions by hand into a CSV
   (`scripts/lesson_2.csv`) — plain text with `a/b` fraction notation,
   diagram-only questions skipped.
3. Converted CSV → JSON with a small Node script (`scripts/csvToLesson.mjs`)
   that validates every row and writes the final data file.

## Deliverables

| File                             | Purpose                                      |
| -------------------------------- | -------------------------------------------- |
| `scripts/lesson_2.csv`           | Editable source data (one row per question). |
| `scripts/lesson_2.meta.json`     | Lesson metadata (id, title, subject).        |
| `scripts/csvToLesson.mjs`        | CSV → validated JSON converter (no deps).    |
| `src/data/lessons/lesson_2.json` | Generated dataset consumed by the app.       |
| `package.json` → `data:build`    | Regenerates the JSON from the CSV.           |

## Data shape

```json
{
  "lessonId": 2,
  "title": "មេរៀនទី 2 ៖ ប្រភាគ",
  "subject": "math",
  "questions": [
    {
      "id": "l2-q1",
      "type": "multiple-choice",
      "prompt": "…",
      "image": null,
      "audioText": null,
      "choices": ["…", "…", "…"],
      "answer": "…"
    }
  ]
}
```

- `image` / `audioText` are kept for schema compatibility with the other lessons
  (TTS/ASR and diagram support), left `null` here.
- All three lessons (Tito, Prathna, Houykea) share this exact schema.

## Coverage — 28 questions

| Topic                                  | Count |
| -------------------------------------- | ----- |
| Comparing like-denominator fractions   | 6     |
| Ordering fractions                     | 4     |
| Equivalent fractions                   | 5     |
| Adding like-denominator fractions      | 5     |
| Subtracting like-denominator fractions | 5     |
| Word problems                          | 3     |

## Regenerate

```bash
pnpm run data:build
```

Reads `scripts/lesson_2.csv` + `scripts/lesson_2.meta.json`, validates, and
rewrites `src/data/lessons/lesson_2.json`.

## Validation built into the converter

- Non-empty `id` and `prompt`.
- At least two choices per question.
- `answer` must equal one of the choices.
- Question ids must be unique.

The build fails loudly on any violation.

## Verification note

The questions were transcribed by reading scanned Khmer pages. Treat the
transcription as a first draft: the Khmer wording (especially the three word
problems) and every `answer` value should be checked against the book before
relying on it.
