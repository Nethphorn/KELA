import { Link } from 'react-router-dom'

import type { LessonModule } from '../lessonContent'
import type { Slide } from '../lessonSlides'
import { slideLabel } from '../lessonSlides'

/** Top row of the header: back link, lesson title, slide count. */
function HeaderTopRow({
  meta,
  index,
  total,
}: {
  readonly meta: LessonModule['meta']
  readonly index: number
  readonly total: number
}): React.JSX.Element {
  return (
    <div className="flex items-center justify-between">
      <Link
        to="/"
        className="rounded-full bg-brand-blue-soft px-3 py-1.5 text-xs font-bold text-brand-blue"
      >
        ← Back
      </Link>
      <p className="text-sm font-extrabold text-ink font-khmer">{meta.topic}</p>
      <span className="text-xs font-bold text-gray-400">
        {index + 1}/{total}
      </span>
    </div>
  )
}

/** Top bar: back link, slide label, and an animated progress bar. */
export function StepperHeader({
  meta,
  slide,
  index,
  total,
}: {
  readonly meta: LessonModule['meta']
  readonly slide: Slide
  readonly index: number
  readonly total: number
}): React.JSX.Element {
  const percent = ((index + 1) / total) * 100

  return (
    <header className="border-b border-black/5 bg-white/70 px-5 py-3">
      <HeaderTopRow meta={meta} index={index} total={total} />
      <p className="mt-2 text-xs font-bold text-quest-orange font-khmer">
        {slideLabel(slide)}
      </p>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-quest-orange transition-all duration-500"
          style={{ width: `${String(percent)}%` }}
        />
      </div>
    </header>
  )
}

/** Previous-slide button. */
function PrevButton({
  disabled,
  onPrev,
}: {
  readonly disabled: boolean
  readonly onPrev: () => void
}): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onPrev}
      disabled={disabled}
      className="rounded-full px-5 py-2 text-sm font-bold text-gray-500 disabled:opacity-30"
    >
      ← ថយ Back
    </button>
  )
}

/** Next / done button. */
function NextButton({
  isLast,
  onNext,
}: {
  readonly isLast: boolean
  readonly onNext: () => void
}): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onNext}
      disabled={isLast}
      className="rounded-full bg-quest-orange px-6 py-2 text-sm font-bold text-white shadow-md transition hover:scale-105 disabled:opacity-30"
    >
      {isLast ? '🎉 ចប់ Done' : 'បន្ទាប់ Next →'}
    </button>
  )
}

/** Bottom bar: previous / next (or finish) navigation. */
export function StepperControls({
  index,
  total,
  onPrev,
  onNext,
}: {
  readonly index: number
  readonly total: number
  readonly onPrev: () => void
  readonly onNext: () => void
}): React.JSX.Element {
  return (
    <footer className="flex items-center justify-between border-t border-black/5 bg-white/70 px-5 py-3">
      <PrevButton disabled={index === 0} onPrev={onPrev} />
      <NextButton isLast={index === total - 1} onNext={onNext} />
    </footer>
  )
}
