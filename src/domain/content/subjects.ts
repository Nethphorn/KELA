import type { SubjectCard, SubjectsContent } from '../types'

const FEATURED: SubjectCard = {
  id: 'mathematics',
  titleKm: 'គណិតវិទ្យា',
  titleEn: 'Mathematics World',
  description: 'សកម្មភាព',
  icon: 'calculate',
  tone: 'primary',
  badge: 'Grade 1-6',
  footer: '+120 Points Ready',
  meta: '6 Grades • 48 Units',
  locked: false,
  progress: { percent: 80, done: 0, total: 0 },
  topics: [
    { id: 'add', label: '➕ បូកលេខ Addition' },
    { id: 'sub', label: '➖ ដកលេខ Subtraction' },
    { id: 'mul', label: '✖️ គុណ Multiplication' },
    { id: 'geo', label: '🔷 រូបធរណីមាត្រ' },
  ],
}

const LOCKED: readonly SubjectCard[] = [
  {
    id: 'khmer',
    titleKm: 'ភាសាខ្មែរ',
    titleEn: 'Khmer Literacy & Reading',
    description:
      'ស្គាល់តួអក្សរ ស្រៈ ព្យញ្ជនៈ និងការអានរឿងនិទានសប្បាយៗ។ Fun character stories & handwriting traces.',
    icon: 'menu_book',
    tone: 'secondary',
    badge: 'មកដល់ឆាប់ៗ',
    footer: 'Unlock at Level 5 • Coming in Term 2',
    meta: '',
    locked: true,
  },
  {
    id: 'science',
    titleKm: 'វិទ្យាសាស្ត្រ',
    titleEn: 'Science & Discovery',
    description:
      'ស្វែងយល់ពីធម្មជាតិ ភពផែនដី សត្វ និងការពិសោធន៍តូចៗ! Interactive solar system & ecosystem mini-labs.',
    icon: 'biotech',
    tone: 'tertiary',
    badge: 'មកដល់ឆាប់ៗ',
    footer: '32 Interactive Experiments',
    meta: '',
    locked: true,
  },
  {
    id: 'english',
    titleKm: 'ភាសាអង់គ្លេស',
    titleEn: 'English for Young Explorers',
    description:
      'រៀនពាក្យគន្លឹះ បញ្ចេញសំឡេង Phonics និងល្បែងសន្ទនាឆ្លាតវៃ។ Vocabulary builder with voice phonics game.',
    icon: 'spellcheck',
    tone: 'primary',
    badge: 'មកដល់ឆាប់ៗ',
    footer: 'Phonics & Oxford Kids Curriculum',
    meta: '',
    locked: true,
  },
]

export const SUBJECTS_CONTENT: SubjectsContent = {
  searchPlaceholder: 'ស្វែងរកមុខវិជ្ជា... Search subjects, topics...',
  headingKm: 'មុខវិជ្ជាសាលា',
  headingEn: 'Subjects',
  subtitle: 'Choose your learning world to collect stars & badges!',
  guideName: 'លោកគ្រូ KELA AI',
  guideMessage:
    '«សួស្តីតូចៗ! តោះរៀនគណិតវិទ្យាថ្ងៃនេះ ដើម្បីទទួលបានមេដាយថ្មី!» Ready to explore Grade 2 Math?',
  featured: FEATURED,
  locked: LOCKED,
  dailyPick: {
    label: 'ការណែនាំប្រចាំថ្ងៃ • Daily Pick',
    titleKm: 'ការបូកមានត្រាទុក (Regrouping 2-digit)',
    subtitle: 'Lesson 4 of 5 • Unit 2 (Grade 2)',
  },
}
