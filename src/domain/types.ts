export type Tone = 'primary' | 'secondary' | 'tertiary' | 'neutral'
export type AccentTone = 'primary' | 'secondary' | 'tertiary'
export type ProgressTone = 'primary' | 'secondary' | 'tertiary' | 'outline'

export interface NavItem {
  readonly path: string
  readonly label: string
  readonly icon: string
}

export interface CurrencyStat {
  readonly id: string
  readonly icon: string
  readonly value: string
  readonly tone: Tone
}

export interface QuickStat {
  readonly id: string
  readonly icon: string
  readonly value: string
  readonly label: string
  readonly tone: Tone
}

export interface LessonProgress {
  readonly percent: number
  readonly done: number
  readonly total: number
}

export interface ActiveLesson {
  readonly unit: string
  readonly titleKm: string
  readonly titleEn: string
  readonly subtitle: string
  readonly icon: string
  readonly progress: LessonProgress
}

export interface Companion {
  readonly name: string
  readonly level: string
  readonly status: string
  readonly boost: string
  readonly imageUrl: string
  readonly imageAlt: string
}

export interface Quest {
  readonly id: string
  readonly title: string
  readonly subtitle: string
  readonly icon: string
  readonly tone: AccentTone
  readonly unit?: string
  readonly reward?: string
  readonly action: string
  readonly progress?: LessonProgress
  readonly completed: boolean
}

export interface HomeContent {
  readonly greetingKm: string
  readonly greetingEn: string
  readonly level: string
  readonly levelTitle: string
  readonly xp: LessonProgress
  readonly quickStats: readonly QuickStat[]
  readonly activeLesson: ActiveLesson
  readonly companion: Companion
  readonly quests: readonly Quest[]
  readonly coachTitle: string
  readonly coachSubtitle: string
}

export interface TopicPill {
  readonly id: string
  readonly label: string
}

export interface DailyPick {
  readonly label: string
  readonly titleKm: string
  readonly subtitle: string
}

export interface SubjectCard {
  readonly id: string
  readonly titleKm: string
  readonly titleEn: string
  readonly description: string
  readonly icon: string
  readonly tone: AccentTone
  readonly badge: string
  readonly footer: string
  readonly meta: string
  readonly locked: boolean
  readonly topics?: readonly TopicPill[]
  readonly progress?: LessonProgress
}

export interface SubjectsContent {
  readonly searchPlaceholder: string
  readonly headingKm: string
  readonly headingEn: string
  readonly subtitle: string
  readonly guideName: string
  readonly guideMessage: string
  readonly featured: SubjectCard
  readonly locked: readonly SubjectCard[]
  readonly dailyPick: DailyPick
}

export interface GradeTab {
  readonly id: number
  readonly titleKm: string
  readonly titleEn: string
}

export interface EquationRow {
  readonly addends: readonly number[]
  readonly result: number
  readonly note: string
}

export interface GradeUnit {
  readonly id: number
  readonly unitLabel: string
  readonly titleKm: string
  readonly titleEn: string
  readonly icon: string
  readonly tone: AccentTone
  readonly percent: number
  readonly progressTone: ProgressTone
  readonly statusLabel: string
  readonly lessonsLabel: string
  readonly description?: string
  readonly current: boolean
  readonly completed: boolean
  readonly compact: boolean
}

export interface DailyQuest {
  readonly title: string
  readonly reward: string
  readonly description: string
  readonly streak: string
  readonly tutorName: string
  readonly tutorMessage: string
}

export interface GradeContent {
  readonly breadcrumb: readonly string[]
  readonly titleKm: string
  readonly titleEn: string
  readonly tabs: readonly GradeTab[]
  readonly hero: ActiveLesson
  readonly equation: EquationRow
  readonly units: readonly GradeUnit[]
  readonly dailyQuest: DailyQuest
}
