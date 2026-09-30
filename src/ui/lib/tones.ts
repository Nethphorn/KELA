import type { AccentTone, Tone } from '@/domain/types'

export const ICON_TONE_CLASS: Record<AccentTone, string> = {
  primary: 'bg-primary-fixed text-primary',
  secondary: 'bg-secondary-fixed text-secondary',
  tertiary: 'bg-tertiary-fixed text-tertiary',
}

export const TEXT_TONE_CLASS: Record<AccentTone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
}

export const STAT_TONE_CLASS: Record<Tone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  neutral: 'text-on-surface-variant',
}
