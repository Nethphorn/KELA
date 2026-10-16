import type { Exercise } from '../lessonContent'

export const stagePill: Record<Exercise['stage'], string> = {
  warmup: 'bg-quest-green-soft text-quest-green',
  practice: 'bg-quest-blue-soft text-quest-blue',
  challenge: 'bg-quest-orange-soft text-quest-orange',
}

export const stageLabel: Record<Exercise['stage'], string> = {
  warmup: 'Warm-up',
  practice: 'Practice',
  challenge: 'Challenge',
}

const BASE_TONE = 'bg-gray-50 ring-1 ring-black/5 hover:bg-gray-100'
const CORRECT_TONE =
  'bg-quest-green-soft ring-2 ring-quest-green text-quest-green'
const WRONG_TONE = 'bg-red-50 ring-2 ring-red-400 text-red-500'

/** Picks the option-button colour based on the current answer state. */
export function optionTone(opts: {
  isAnswered: boolean
  isCorrectOption: boolean
  isPicked: boolean
}): string {
  if (opts.isAnswered && opts.isCorrectOption) {
    return CORRECT_TONE
  }
  if (opts.isAnswered && opts.isPicked) {
    return WRONG_TONE
  }
  return BASE_TONE
}
