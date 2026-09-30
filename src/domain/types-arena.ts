import type { AccentTone } from './types'

export interface LessonStep {
  readonly id: number
  readonly label: string
  readonly icon: string
  readonly state: 'done' | 'active' | 'upcoming'
}

export interface CarryData {
  readonly topNumber: number
  readonly bottomNumber: number
  readonly carry: number
  readonly ones: number
  readonly total: number
}

export interface TutorCard {
  readonly name: string
  readonly badge: string
  readonly speechKm: string
  readonly speechEn: string
  readonly hintKm: string
}

export interface GalleryItem {
  readonly id: string
  readonly imageUrl: string
  readonly imageAlt: string
  readonly caption: string
}

export interface LessonContent {
  readonly grade: string
  readonly lessonLabel: string
  readonly titleKm: string
  readonly titleEn: string
  readonly xpReward: string
  readonly progress: number
  readonly steps: readonly LessonStep[]
  readonly stepTag: string
  readonly promptKm: string
  readonly promptEn: string
  readonly columns: {
    readonly tensKm: string
    readonly tensEn: string
    readonly onesKm: string
    readonly onesEn: string
  }
  readonly carry: CarryData
  readonly validation: string
  readonly tutor: TutorCard
  readonly gallery: readonly GalleryItem[]
}

export interface WardrobeItem {
  readonly id: string
  readonly emoji: string
  readonly name: string
  readonly category: string
  readonly rarity: string
  readonly rarityTone: AccentTone
  readonly state: 'equipped' | 'owned' | 'shop'
  readonly price?: string
}

export interface WardrobeCategory {
  readonly id: string
  readonly emoji: string
  readonly label: string
  readonly count?: number
}

export interface AvatarLook {
  readonly name: string
  readonly level: string
  readonly imageUrl: string
  readonly imageAlt: string
  readonly tags: readonly string[]
}

export interface WardrobeContent {
  readonly look: AvatarLook
  readonly categories: readonly WardrobeCategory[]
  readonly filters: readonly string[]
  readonly items: readonly WardrobeItem[]
  readonly equippedTags: readonly string[]
  readonly storeTitle: string
  readonly storeSubtitle: string
  readonly storeCta: string
}
