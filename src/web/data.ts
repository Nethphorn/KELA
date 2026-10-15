/**
 * Shared types and mock content for the KELA dashboard.
 *
 * The UI is a fixed square display intended to be embedded in a robot, so the
 * data here is intentionally static. Swapping in a real data source later only
 * requires replacing `dashboardData` with fetched values of the same shape.
 */

export type QuestStatus = 'completed' | 'current' | 'locked' | 'in-progress'

export type QuestAccent = 'green' | 'blue' | 'orange'

export interface Quest {
  id: string
  /** Decorative icon shown in the rounded tile. */
  icon: '1234' | 'plus' | 'minus'
  accent: QuestAccent
  /** e.g. "Unit 1 • ជំពូកទី ១" */
  unitLabel: string
  /** Khmer title, e.g. "ចំនួន និងការរាប់". */
  titleKhmer: string
  /** Latin subtitle, e.g. "Numbers & Counting". */
  subtitleLatin: string
  /** Optional extra description line (used by the subtraction card). */
  description?: string
  /** Right-aligned lesson count label, e.g. "6 មេរៀន". */
  lessonCountLabel: string
  /** Status pill text on the top right, e.g. "បានបញ្ចប់ 100%". */
  statusLabel: string
  status: QuestStatus
  /** 0 - 100 completion of the progress bar. */
  progressPercent: number
  /** Label under the progress bar on the left, e.g. "បានរៀនរួចសព្វគ្រប់". */
  progressLabelKhmer: string
  /** Fraction label under the bar on the right, e.g. "6/6". */
  progressFractionLabel: string
  /** Optional "Current" ribbon in the top-right corner. */
  ribbonLabel?: string
}

export interface MathPet {
  id: string
  name: string
  level: number
  avatarGradient: string
  equipped: boolean
}

export interface UpNext {
  title: string
  subtitle: string
}

export interface Companion {
  name: string
  roleLabel: string
  avatarGradient: string
  level: number
  xpCurrent: number
  xpMax: number
}

export interface HeaderStats {
  coins: number
  streakDays: number
  notifications: number
  avatarBadge: number
}

export interface DashboardData {
  header: HeaderStats
  activeQuestCount: number
  quests: Quest[]
  petsActiveCount: number
  equippedPet: MathPet
  companionBoostLabel: string
  upNext: UpNext
  companion: Companion
}

export const dashboardData: DashboardData = {
  header: {
    coins: 1250,
    streakDays: 7,
    notifications: 0,
    avatarBadge: 4,
  },
  activeQuestCount: 3,
  quests: [
    {
      id: 'unit-1',
      icon: '1234',
      accent: 'green',
      unitLabel: 'Unit 1 • ជំពូកទី ១',
      titleKhmer: 'ចំនួន និងការរាប់',
      subtitleLatin: 'Numbers & Counting',
      lessonCountLabel: '6 មេរៀន',
      statusLabel: 'បានបញ្ចប់ 100%',
      status: 'completed',
      progressPercent: 100,
      progressLabelKhmer: 'បានរៀនរួចសព្វគ្រប់',
      progressFractionLabel: '6/6',
    },
    {
      id: 'unit-2',
      icon: 'plus',
      accent: 'blue',
      unitLabel: 'Unit 2 • ជំពូកទី ២',
      titleKhmer: 'វិធីបូក',
      subtitleLatin: 'Addition Focus',
      lessonCountLabel: '5 មេរៀន',
      statusLabel: '',
      status: 'current',
      progressPercent: 80,
      progressLabelKhmer: 'នៅសល់ ១ មេរៀនទៀត',
      progressFractionLabel: '4/5',
      ribbonLabel: 'កំពុងសិក្សា Current',
    },
    {
      id: 'unit-3',
      icon: 'minus',
      accent: 'orange',
      unitLabel: 'Unit 3 • ជំពូកទី ៣',
      titleKhmer: 'វិធីដក',
      subtitleLatin: 'Subtraction & Regrouping',
      description:
        'វិធីដកមានខ្ទី និងខ្ទាធ្មី • Taking away, borrowing & problem solving',
      lessonCountLabel: '5 មេរៀន',
      statusLabel: 'រឿងនភាព 60%',
      status: 'in-progress',
      progressPercent: 60,
      progressLabelKhmer: '',
      progressFractionLabel: '',
    },
  ],
  petsActiveCount: 2,
  equippedPet: {
    id: 'math-dragon',
    name: 'Lv. 4 Math Dragon',
    level: 4,
    avatarGradient: 'from-sky-200 to-indigo-200',
    equipped: true,
  },
  companionBoostLabel: 'Companion Boost: +10%',
  upNext: {
    title: 'Speed Math Blast',
    subtitle: '60s Challenge • 2:00 PM',
  },
  companion: {
    name: 'Sparky the Dragon',
    roleLabel: 'Level 4 Math Companion',
    avatarGradient: 'from-sky-200 to-indigo-200',
    level: 4,
    xpCurrent: 340,
    xpMax: 500,
  },
}
