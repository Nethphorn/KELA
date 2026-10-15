import { LESSON_BLOCKS_URL, LESSON_STUDENTS_URL } from './assets'
import type { LessonContent, LessonStep } from '../types-arena'

const STEPS: readonly LessonStep[] = [
  { id: 1, label: 'សេចក្តីផ្តើម', icon: 'auto_stories', state: 'done' },
  { id: 2, label: 'មើលគំរូ', icon: 'visibility', state: 'done' },
  { id: 3, label: 'គន្លឹះ', icon: 'lightbulb', state: 'done' },
  { id: 4, label: 'ប្រតិបត្តិ', icon: 'play_circle', state: 'active' },
  { id: 5, label: 'ធ្វើលំហាត់', icon: 'quiz', state: 'upcoming' },
]

export const LESSON_CONTENT: LessonContent = {
  grade: 'ថ្នាក់ទី ២ • Grade 2',
  lessonLabel: 'មេរៀនទី ២',
  titleKm: 'ស្វែងយល់ពីការត្រាទុក',
  titleEn: '(Understanding Carrying)',
  xpReward: '+15 XP',
  progress: 80,
  steps: STEPS,
  stepTag: 'ចំណុចសំខាន់ • Step 4: Show the Carry!',
  promptKm: 'យើងត្រាទុក ១ នៅខ្ទង់សិប!',
  promptEn:
    'Keep 2 in the ones column, and carry 1 ten over to the tens column!',
  columns: {
    tensKm: 'ខ្ទង់សិប',
    tensEn: '(Tens)',
    onesKm: 'ខ្ទង់រាយ',
    onesEn: '(Ones)',
  },
  carry: {
    topNumber: 27,
    bottomNumber: 15,
    carry: 1,
    ones: 2,
    total: 42,
  },
  validation: 'ខ្ទង់រាយ 7 + 5 = 12 (សរសេរ 2 ត្រាទុក 1)',
  tutor: {
    name: 'លោកគ្រូ AI KELA (Tutor)',
    badge: 'ផ្ទាល់ខ្លួន',
    speechKm:
      '«នេះហើយជាការត្រាទុក! យើងទុក ២ នៅខ្ទង់រាយ ហើយលើក ១ ទៅថែមលើខ្ទង់សិប។»',
    speechEn: 'Now sum the tens: 1 (carry) + 2 + 1 = 4!',
    hintKm: '«សាកគិតមើល៖ យកលេខ ១ ដែលត្រាទុក មកបូកជាមួយ ២ បន្ទាប់មកបូក ១ ទៀត!»',
  },
  gallery: [
    {
      id: 'blocks',
      imageUrl: LESSON_BLOCKS_URL,
      imageAlt: 'Playful 3D wooden counting blocks showing tens and ones',
      caption: 'ប្លុកខ្ទង់សិប (10s blocks)',
    },
    {
      id: 'students',
      imageUrl: LESSON_STUDENTS_URL,
      imageAlt: 'Cartoon animal students celebrating a solved problem',
      caption: 'សប្បាយរៀនគណិត!',
    },
  ],
}
