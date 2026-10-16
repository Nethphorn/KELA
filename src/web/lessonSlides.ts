import type { Exercise, Lesson, LessonModule } from './lessonContent'

/**
 * A single step shown in the animated lesson stepper. The lesson is flattened
 * into an ordered list of slides so the square page can show one at a time.
 */
export type Slide =
  | { kind: 'objective'; meta: LessonModule['meta'] }
  | { kind: 'hook'; hook: Lesson['hook'] }
  | { kind: 'teach'; teachStep: Lesson['teach'][number]; total: number }
  | { kind: 'worked'; worked: Lesson['workedExample'] }
  | { kind: 'check'; check: Lesson['checkUnderstanding'] }
  | { kind: 'exercise'; exercise: Exercise; position: number; total: number }
  | {
      kind: 'wrapUp'
      wrapUp: LessonModule['wrapUp']
      masteryRule: LessonModule['masteryRule']
    }

/** Short label shown in the progress header for a slide. */
export function slideLabel(slide: Slide): string {
  const labels: Record<Slide['kind'], string> = {
    objective: 'គោលបំណង • Objective',
    hook: 'រឿង • Hook',
    teach:
      slide.kind === 'teach'
        ? `បង្រៀន • Teach ${String(slide.teachStep.step)}/${String(slide.total)}`
        : 'បង្រៀន • Teach',
    worked: 'ខ្ញុំធ្វើ • Worked Example',
    check: 'តោះធ្វើជាមួយគ្នា • Check',
    exercise:
      slide.kind === 'exercise'
        ? `លំហាត់ • Exercise ${String(slide.position)}/${String(slide.total)}`
        : 'លំហាត់ • Exercise',
    wrapUp: 'សរុប • Wrap-up',
  }
  return labels[slide.kind]
}

/** Flattens a lesson module into the ordered slide list for the stepper. */
export function buildSlides(lesson: LessonModule): Slide[] {
  const { meta, lesson: content, exercises, wrapUp, masteryRule } = lesson
  const teachTotal = content.teach.length
  const exerciseTotal = exercises.length

  return [
    { kind: 'objective', meta },
    { kind: 'hook', hook: content.hook },
    ...content.teach.map((teachStep): Slide => ({
      kind: 'teach',
      teachStep,
      total: teachTotal,
    })),
    { kind: 'worked', worked: content.workedExample },
    { kind: 'check', check: content.checkUnderstanding },
    ...exercises.map((exercise, index): Slide => ({
      kind: 'exercise',
      exercise,
      position: index + 1,
      total: exerciseTotal,
    })),
    { kind: 'wrapUp', wrapUp, masteryRule },
  ]
}
