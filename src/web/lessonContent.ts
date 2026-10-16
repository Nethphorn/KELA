/**
 * KELA tutor lesson content for Unit 3 (Addition / វិធីបូក).
 *
 * Generated from `lessons3/lesson3_addition.json` (MoEYS Grade primary,
 * addition of large numbers) and shaped to the KELA tutor JSON schema:
 * one complete lesson (hook, teach, worked example, check understanding)
 * followed by 5 exercises across warm-up / practice / challenge stages.
 */

import type { LessonModule } from './lessonTypes'
import { unit3Exercises } from './unit3Exercises'

export type {
  CheckUnderstanding,
  Difficulty,
  Emotion,
  Exercise,
  ExerciseStage,
  Hint,
  InputMode,
  Lesson,
  LessonModule,
  MasteryRule,
  Reaction,
  SpokenText,
  TeachStep,
} from './lessonTypes'

/**
 * Unit 3 addition lesson. The hook and worked example come from the first
 * worked problem in the source textbook (rice warehouses: 56 590 + 4 845),
 * a concrete Cambodian situation.
 */
export const unit3Lesson: LessonModule = {
  meta: {
    grade: 'Primary (Grade 4)',
    topic: 'វិធីបូកចំនួនធំ (Addition of large numbers)',
    objective:
      'កុមារអាចបូកចំនួនមានច្រើនខ្ទង់ ដោយប្រើការត្រាទុក (carrying) បានត្រឹមត្រូវ។',
    estimatedMinutes: 12,
  },

  lesson: {
    hook: {
      display:
        'នៅឃ្លាំងស្រូវមួយ មានស្រូវ ៥៦ ៥៩០ បាវ ឃ្លាំងទីពីរមាន ៤ ៨៤៥ បាវ។ តើរួមគ្នាមានប៉ុន្មានបាវ?',
      speak:
        'នៅផ្សារ មានឃ្លាំងស្រូវពីរ។ ឃ្លាំងទីមួយមានស្រូវ ប្រាំមួយម៉ឺន។ ឃ្លាំងទីពីរមានតិចជាង។ [pause] តើរួមគ្នាមានប៉ុន្មានបាវ?',
      emotion: 'happy',
    },
    teach: [
      {
        step: 1,
        display: 'តម្រៀបលេខតាមខ្ទង់ ៖ ឯកតា នៅក្រោមឯកតា ដប់ នៅក្រោមដប់។',
        speak:
          'ដំបូង យើងតម្រៀបលេខជាជួរ។ ឯកតា នៅក្រោមឯកតា។ [pause] ដប់ នៅក្រោមដប់។',
        visualDescription:
          'ចំនួនពីរ ត្រូវបានតម្រៀបជាជួរឈរ ដោយខ្ទង់នីមួយៗ ត្រង់គ្នា។',
        emotion: 'thinking',
      },
      {
        step: 2,
        display: 'បូកពីខ្ទង់ឯកតាទៅ ៖ ០ + ៥ = ៥។',
        speak:
          'យើងចាប់ផ្តើមពីខ្ទង់ឯកតា។ សូន្យ បូក ប្រាំ ស្មើ ប្រាំ។ សរសេរ ប្រាំ។',
        visualDescription: 'ព្រួញចង្អុលទៅខ្ទង់ឯកតា ហើយលេខប្រាំ លេចឡើងនៅផលបូក។',
        emotion: 'thinking',
      },
      {
        step: 3,
        display:
          'បើផលបូកធំជាង ៩ យើងសរសេរខ្ទង់ឯកតា ហើយ "ត្រាទុក" ១ ទៅខ្ទង់បន្ទាប់។',
        speak:
          'ពេលផលបូកធំជាងប្រាំបួន យើងសរសេរលេខខាងក្រោម។ [pause] រួចត្រាទុក មួយ ទៅខ្ទង់បន្ទាប់។',
        visualDescription:
          'លេខមួយតូច ត្រូវបានសរសេរនៅពីលើខ្ទង់បន្ទាប់ ជាសញ្ញាត្រាទុក។',
        emotion: 'encouraging',
      },
    ],
    workedExample: {
      display:
        '56 590 + 4 845 = ?\nឯកតា ៖ 0+5=5\nដប់ ៖ 9+4=13 → សរសេរ 3 ត្រាទុក 1\nរយ ៖ 1+5+8=14 → សរសេរ 4 ត្រាទុក 1\nពាន់ ៖ 1+6+4=11 → សរសេរ 1 ត្រាទុក 1\nម៉ឺន ៖ 1+5=6\nផលបូក = 61 435',
      speak:
        'ឥឡូវ មើលខ្ញុំធ្វើ។ ប្រាំបួន បូក បួន ស្មើ ដប់បី។ សរសេរ បី ត្រាទុក មួយ។ [pause] បន្តទៅ រហូតបាន ប្រាំមួយម៉ឺន មួយពាន់ បួនរយ សាមសិបប្រាំ។',
      emotion: 'proud',
    },
    checkUnderstanding: {
      display: 'តោះធ្វើជាមួយគ្នា ៖ 9 + 4 = ? (តើត្រូវត្រាទុកទេ?)',
      speak:
        'តោះធ្វើជាមួយគ្នា។ ប្រាំបួន បូក បួន ស្មើប៉ុន្មាន? [pause] តើយើងត្រូវត្រាទុកទេ?',
      options: ['13 ត្រាទុក 1', '12 ត្រាទុក 1', '13 មិនត្រាទុក'],
      answer: '13 ត្រាទុក 1',
    },
  },

  exercises: unit3Exercises,

  wrapUp: {
    display:
      'ល្អ​ណាស់! ថ្ងៃនេះ យើងរៀនបូកចំនួនធំ និងការត្រាទុក។ ជួបគ្នាលើកក្រោយ!',
    speak:
      'ល្អ​ណាស់! ថ្ងៃនេះ យើងរៀនបូកចំនួនធំ។ អ្នកខិតខំ​ម្លេះ។ [pause] ជួបគ្នាលើកក្រោយ!',
    emotion: 'proud',
  },

  masteryRule: {
    passPercent: 80,
    ifFail: 'repeat_with_new_questions',
    if3WrongInRow: 'drop_to_easier',
  },
}
