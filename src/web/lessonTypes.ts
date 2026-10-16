/**
 * Type definitions for the KELA tutor lesson schema.
 *
 * `speak` strings are the text handed to TTS: short sentences, numbers written
 * as Khmer words, no symbols, with [pause] markers. `display` strings may use
 * digits and math symbols.
 */

export type Emotion = 'happy' | 'thinking' | 'encouraging' | 'proud' | 'gentle'

export type ExerciseStage = 'warmup' | 'practice' | 'challenge'

export type Difficulty = 'easy' | 'medium' | 'hard'

export type InputMode = 'choice' | 'voice' | 'voice_or_choice'

export interface SpokenText {
  display: string
  speak: string
  emotion?: Emotion
}

export interface TeachStep {
  step: number
  display: string
  speak: string
  visualDescription: string
  emotion: Emotion
}

export interface CheckUnderstanding {
  display: string
  speak: string
  options: string[]
  answer: string
}

export interface Lesson {
  hook: SpokenText & { emotion: Emotion }
  teach: TeachStep[]
  workedExample: SpokenText & { emotion: Emotion }
  checkUnderstanding: CheckUnderstanding
}

export interface Hint {
  display: string
  speak: string
}

export interface Reaction {
  speak: string
  emotion: Emotion
}

export interface Exercise {
  id: string
  stage: ExerciseStage
  difficulty: Difficulty
  skillTag: string
  inputMode: InputMode
  display: string
  speak: string
  emotion: Emotion
  options: string[]
  expectedAnswer: string
  acceptedVoiceVariants: string[]
  maxListenSeconds: number
  hint1: Hint
  hint2: Hint
  onCorrect: Reaction
  onWrong: Reaction
}

export interface MasteryRule {
  passPercent: number
  ifFail: string
  if3WrongInRow: string
}

export interface LessonModule {
  meta: {
    grade: string
    topic: string
    objective: string
    estimatedMinutes: number
  }
  lesson: Lesson
  exercises: Exercise[]
  wrapUp: SpokenText & { emotion: Emotion }
  masteryRule: MasteryRule
}
