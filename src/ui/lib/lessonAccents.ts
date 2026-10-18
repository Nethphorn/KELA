import type { LessonAccent } from '@/domain/types-lessons'

export interface LessonAccentStyles {
  bar: string
  tileBg: string
  tileText: string
  unitText: string
  statusPill: string
  fractionText: string
}

/** Tailwind class maps keyed by the lesson accent colour. */
export const LESSON_ACCENT: Record<LessonAccent, LessonAccentStyles> = {
  green: {
    bar: 'bg-quest-green',
    tileBg: 'bg-quest-green-soft',
    tileText: 'text-quest-green',
    unitText: 'text-quest-green',
    statusPill: 'bg-quest-green-soft text-quest-green',
    fractionText: 'text-quest-green',
  },
  blue: {
    bar: 'bg-quest-blue',
    tileBg: 'bg-quest-blue-soft',
    tileText: 'text-quest-blue',
    unitText: 'text-quest-blue',
    statusPill: 'bg-quest-blue-soft text-quest-blue',
    fractionText: 'text-quest-blue',
  },
  orange: {
    bar: 'bg-quest-orange',
    tileBg: 'bg-quest-orange-soft',
    tileText: 'text-quest-orange',
    unitText: 'text-quest-orange',
    statusPill: 'bg-quest-orange-soft text-quest-orange',
    fractionText: 'text-quest-orange',
  },
}
