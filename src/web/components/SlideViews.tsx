import type { Lesson, LessonModule } from '../lessonContent'

/** Shared centered card wrapper for a slide. */
function SlideCard({
  accent,
  emoji,
  children,
}: {
  readonly accent: string
  readonly emoji: string
  readonly children: React.ReactNode
}): React.JSX.Element {
  return (
    <div className="flex w-full max-w-md flex-col items-center text-center">
      <div className="mb-4 text-5xl animate-float" aria-hidden="true">
        {emoji}
      </div>
      <div
        className={`w-full rounded-3xl p-6 shadow-lg ring-1 ring-black/5 ${accent}`}
      >
        {children}
      </div>
    </div>
  )
}

/** Objective slide. */
export function ObjectiveView({
  meta,
}: {
  readonly meta: LessonModule['meta']
}): React.JSX.Element {
  return (
    <SlideCard accent="bg-quest-orange-soft" emoji="🎯">
      <p className="text-sm font-bold text-quest-orange">គោលបំណង Objective</p>
      <p className="mt-2 text-xl font-extrabold text-ink font-khmer">
        {meta.objective}
      </p>
      <p className="mt-3 text-xs font-semibold text-gray-500">
        {meta.grade} • ~{meta.estimatedMinutes} min
      </p>
    </SlideCard>
  )
}

/** Story hook slide. */
export function HookView({
  hook,
}: {
  readonly hook: Lesson['hook']
}): React.JSX.Element {
  return (
    <SlideCard accent="bg-white" emoji="🌾">
      <p className="text-sm font-bold text-gray-400">រឿង • Hook</p>
      <p className="mt-2 text-xl font-extrabold text-ink font-khmer">
        {hook.display}
      </p>
      <p className="mt-3 text-sm text-gray-500 font-khmer">🔊 {hook.speak}</p>
    </SlideCard>
  )
}

/** Single teach-step slide. */
export function TeachView({
  teachStep,
  total,
}: {
  readonly teachStep: Lesson['teach'][number]
  readonly total: number
}): React.JSX.Element {
  return (
    <SlideCard accent="bg-white" emoji="📘">
      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-quest-orange-soft text-xl font-extrabold text-quest-orange animate-pop-in">
        {teachStep.step}
      </div>
      <p className="text-xs font-semibold text-gray-400">
        Step {teachStep.step} / {total}
      </p>
      <p className="mt-2 text-xl font-extrabold text-ink font-khmer">
        {teachStep.display}
      </p>
      <p className="mt-2 text-sm text-gray-500 font-khmer">
        🔊 {teachStep.speak}
      </p>
      <p className="mt-2 text-xs italic text-gray-400 font-khmer">
        🖼 {teachStep.visualDescription}
      </p>
    </SlideCard>
  )
}

/** Wrap-up slide. */
export function WrapUpView({
  wrapUp,
  masteryRule,
}: {
  readonly wrapUp: LessonModule['wrapUp']
  readonly masteryRule: LessonModule['masteryRule']
}): React.JSX.Element {
  return (
    <SlideCard accent="bg-quest-green-soft" emoji="🎉">
      <p className="text-sm font-bold text-quest-green">សរុប • Wrap-up</p>
      <p className="mt-2 text-xl font-extrabold text-ink font-khmer">
        {wrapUp.display}
      </p>
      <p className="mt-3 text-xs font-semibold text-gray-600">
        Mastery: pass ≥ {masteryRule.passPercent}%
      </p>
    </SlideCard>
  )
}
