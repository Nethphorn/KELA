/**
 * The 5 exercises for the Unit 3 addition lesson, generated from
 * `lessons3/lesson3_addition.json` and shaped to the KELA tutor schema:
 * 2 warm-up (choice), 2 practice (voice_or_choice + choice), 1 challenge
 * (voice word problem with button fallback). Wrong options reflect real
 * student mistakes (e.g. mis-carrying), not random numbers.
 */

import type { Exercise } from './lessonTypes'

export const unit3Exercises: Exercise[] = [
  // WARM-UP (1/5) — easy, choice
  {
    id: 'u3-ex1',
    stage: 'warmup',
    difficulty: 'easy',
    skillTag: 'single-digit-add-no-carry',
    inputMode: 'choice',
    display: '0 + 5 = ?',
    speak: 'សូន្យ បូក ប្រាំ ស្មើប៉ុន្មាន? [pause] ជ្រើសរើសចម្លើយ។',
    emotion: 'happy',
    options: ['4', '5', '6'],
    expectedAnswer: '5',
    acceptedVoiceVariants: ['5', 'ប្រាំ', '៥', 'five'],
    maxListenSeconds: 8,
    hint1: {
      display: 'ចំនួនណាមួយបូកនឹងសូន្យ នៅដដែល។',
      speak: 'ចំនួនណាបូកនឹងសូន្យ នៅតែដដែល។',
    },
    hint2: {
      display: '0 + 5 មានន័យថា មិនបន្ថែមអ្វីទេ → 5។',
      speak: 'សូន្យ មានន័យថា មិនបន្ថែម។ ដូច្នេះ ចម្លើយគឺ ប្រាំ។',
    },
    onCorrect: { speak: 'ល្អ​ណាស់! ត្រឹមត្រូវហើយ។', emotion: 'proud' },
    onWrong: { speak: 'ជិតហើយ! តោះសាកម្តងទៀត។', emotion: 'gentle' },
  },

  // WARM-UP (2/5) — easy, choice (carry concept)
  {
    id: 'u3-ex2',
    stage: 'warmup',
    difficulty: 'easy',
    skillTag: 'single-digit-add-with-carry',
    inputMode: 'choice',
    display: '9 + 4 = ?',
    speak: 'ប្រាំបួន បូក បួន ស្មើប៉ុន្មាន? [pause] ជ្រើសរើសចម្លើយ។',
    emotion: 'happy',
    options: ['12', '13', '14'],
    expectedAnswer: '13',
    acceptedVoiceVariants: ['13', 'ដប់បី', '១៣', 'thirteen'],
    maxListenSeconds: 8,
    hint1: {
      display: 'រាប់បន្ថែម ៤ ចាប់ពី ៩ ៖ 10, 11, 12, 13។',
      speak: 'រាប់បន្ថែម បួន ចាប់ពី ប្រាំបួន។',
    },
    hint2: {
      display: '9 + 4 = 13 → សរសេរ 3 ត្រាទុក 1។',
      speak: 'ប្រាំបួន បូក បួន ស្មើ ដប់បី។ ត្រាទុក មួយ។',
    },
    onCorrect: { speak: 'ត្រឹមត្រូវ! ឆ្លាតណាស់។', emotion: 'proud' },
    onWrong: { speak: 'ជិតហើយ! តោះរាប់ម្តងទៀត។', emotion: 'gentle' },
  },

  // PRACTICE (3/5) — medium, voice_or_choice
  {
    id: 'u3-ex3',
    stage: 'practice',
    difficulty: 'medium',
    skillTag: 'mental-add-round-number',
    inputMode: 'voice_or_choice',
    display: '25 150 + 50 = ?',
    speak:
      'ម្ភៃប្រាំពាន់ មួយរយ ហាសិប បូក ហាសិប ស្មើប៉ុន្មាន? [pause] និយាយ ឬ ចុចប៊ូតុង។',
    emotion: 'thinking',
    options: ['25 200', '25 100', '30 150'],
    expectedAnswer: '25 200',
    acceptedVoiceVariants: [
      '25200',
      '25 200',
      '២៥២០០',
      'ម្ភៃប្រាំពាន់ពីររយ',
      'twenty five thousand two hundred',
    ],
    maxListenSeconds: 8,
    hint1: {
      display: 'បូកតែខ្ទង់ដប់ ៖ 150 + 50។',
      speak: 'មើលតែខ្ទង់រយ និងដប់។ មួយរយ ហាសិប បូក ហាសិប។',
    },
    hint2: {
      display: '150 + 50 = 200 → 25 200។',
      speak: 'មួយរយហាសិប បូក ហាសិប ស្មើ ពីររយ។',
    },
    onCorrect: { speak: 'ពូកែម្លេះ! ត្រឹមត្រូវណាស់។', emotion: 'proud' },
    onWrong: {
      speak: 'ជិតហើយ! តោះពិនិត្យខ្ទង់ដប់ម្តងទៀត។',
      emotion: 'gentle',
    },
  },

  // PRACTICE (4/5) — medium, choice (column add with carry)
  {
    id: 'u3-ex4',
    stage: 'practice',
    difficulty: 'medium',
    skillTag: 'column-add-5-and-4-digit',
    inputMode: 'choice',
    display: '54 210 + 3 058 = ?',
    speak:
      'ហាសិបបួនពាន់ ពីររយ ដប់ បូក បីពាន់ ហាសិបប្រាំបី។ [pause] ជ្រើសរើសផលបូក។',
    emotion: 'thinking',
    options: ['57 268', '57 168', '84 790'],
    expectedAnswer: '57 268',
    acceptedVoiceVariants: ['57268', '57 268', '៥៧២៦៨'],
    maxListenSeconds: 8,
    hint1: {
      display: 'បូកពីខ្ទង់ឯកតាទៅ ៖ 0+8, 1+5, 2+0, 4+3, 5+0។',
      speak: 'ចាប់ផ្តើមពីខ្ទង់ឯកតា។ សូន្យ បូក ប្រាំបី។',
    },
    hint2: {
      display: '54 210 + 3 058 = 57 268 (គ្មានការត្រាទុក)។',
      speak:
        'បូកខ្ទង់ម្តងមួយៗ។ គ្មានការត្រាទុកទេ។ ចម្លើយ ហាសិបប្រាំពីរ ពាន់ ពីររយ ហុកសិបប្រាំបី។',
    },
    onCorrect: { speak: 'អស្ចារ្យ! ត្រឹមត្រូវទាំងអស់។', emotion: 'proud' },
    onWrong: { speak: 'ជិតហើយ! តោះបូកខ្ទង់ម្តងមួយៗ។', emotion: 'gentle' },
  },

  // CHALLENGE (5/5) — hard, voice with button fallback (word problem)
  {
    id: 'u3-ex5',
    stage: 'challenge',
    difficulty: 'hard',
    skillTag: 'word-problem-add',
    inputMode: 'voice',
    display:
      'គ្រួសារកសិករប្រមូលផលដំឡូង ចម្ការទី១ បាន 25 335kg និងចម្ការទី២ បាន 9 560kg។ តើទាំងអស់បានប៉ុន្មានគីឡូក្រាម?',
    speak:
      'កសិករប្រមូលផលដំឡូង។ ចម្ការទីមួយ ម្ភៃប្រាំពាន់ កិឡូ។ ចម្ការទីពីរ ប្រាំបួនពាន់ កិឡូ។ [pause] តើរួមគ្នាប៉ុន្មានកិឡូ?',
    emotion: 'encouraging',
    options: ['34 895', '34 795', '35 895'],
    expectedAnswer: '34 895',
    acceptedVoiceVariants: [
      '34895',
      '34 895',
      '៣៤៨៩៥',
      'សាមសិបបួនពាន់ប្រាំបីរយកៅសិបប្រាំ',
      'thirty four thousand eight hundred ninety five',
    ],
    maxListenSeconds: 8,
    hint1: {
      display: 'បូកចំនួនពីរ ៖ 25 335 + 9 560។',
      speak: 'បូកចំនួនពីរ។ ម្ភៃប្រាំពាន់ បូក ប្រាំបួនពាន់។',
    },
    hint2: {
      display: 'ខ្ទង់ឯកតា ៖ 5+0=5។ បន្តត្រាទុករហូតបាន 34 895។',
      speak: 'ចាប់ពីឯកតា។ ប្រាំ បូក សូន្យ ស្មើ ប្រាំ។ បន្តទៅ ត្រាទុក។',
    },
    onCorrect: { speak: 'ពូកែខ្លាំងណាស់! ត្រឹមត្រូវ។', emotion: 'proud' },
    onWrong: {
      speak: 'ជិតហើយ! តោះដោះស្រាយជាមួយគ្នា។',
      emotion: 'gentle',
    },
  },
]
