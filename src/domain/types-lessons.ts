export type LessonAccent = 'green' | 'blue' | 'orange'
export type LessonStatus = 'completed' | 'current' | 'in-progress' | 'locked'

export interface LessonCatalogItem {
  readonly id: string
  readonly lessonId?: number
  readonly icon: string
  readonly accent: LessonAccent
  readonly unitLabel: string
  readonly titleKhmer: string
  readonly subtitleLatin: string
  readonly description?: string
  readonly lessonCountLabel: string
  readonly statusLabel: string
  readonly status: LessonStatus
  readonly progressPercent: number
  readonly progressLabelKhmer: string
  readonly progressFractionLabel: string
  readonly ribbonLabel?: string
}

export interface LessonPet {
  readonly name: string
  readonly level: number
  readonly emoji: string
}

export interface LessonHubSidebar {
  readonly petsActiveCount: number
  readonly equippedPet: LessonPet
  readonly boostLabel: string
  readonly upNextTitle: string
  readonly upNextSubtitle: string
  readonly companionName: string
  readonly companionRole: string
  readonly companionLevel: number
  readonly companionXpCurrent: number
  readonly companionXpMax: number
}

export interface LessonHubContent {
  readonly activeCount: number
  readonly items: readonly LessonCatalogItem[]
  readonly sidebar: LessonHubSidebar
}
