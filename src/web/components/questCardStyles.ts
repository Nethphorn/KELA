import type { QuestAccent } from '../data'

export interface AccentStyles {
  bar: string
  tileBg: string
  tileText: string
  unitText: string
  statusPill: string
  fractionText: string
}

/** Tailwind class maps keyed by the quest accent colour. */
export const accent: Record<QuestAccent, AccentStyles> = {
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
