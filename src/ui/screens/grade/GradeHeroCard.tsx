import { GRADE_CONTENT } from '@/domain/content/grades'
import type { EquationRow, LessonProgress } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface GradeHeroCardProps {
  readonly onStart: () => void
}

function EquationTeaser({ equation }: { readonly equation: EquationRow }) {
  return (
    <div className="mt-1 flex items-center justify-between gap-2 rounded-2xl bg-surface-container-low/80 p-3 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary-fixed text-headline-md font-bold text-tertiary shadow-inner">
          +
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-body-lg font-bold leading-tight text-on-surface">
            <span>{equation.addends[0]}</span>
            <span>+</span>
            <span>{equation.addends[1]}</span>
            <span>=</span>
            <span className="rounded-md bg-secondary-fixed px-1.5 py-0.5 text-secondary">
              {equation.result}
            </span>
          </div>
          <span className="text-label-badge font-semibold text-tertiary-container">
            {equation.note}
          </span>
        </div>
      </div>
    </div>
  )
}

interface HeroTagsProps {
  readonly unit: string
  readonly subtitle: string
}

function HeroTags({ unit, subtitle }: HeroTagsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-1.5">
      <div className="flex items-center gap-1.5">
        <span className="rounded-full bg-primary px-2.5 py-0.5 text-label-badge font-bold text-on-primary">
          {unit}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-tertiary-fixed px-2 py-0.5 text-label-badge font-bold text-on-tertiary-fixed">
          <span className="animate-pulse">🔥</span> Active Session
        </span>
      </div>
      <span className="rounded-full bg-surface-container px-2 py-0.5 text-label-badge text-on-surface-variant">
        {subtitle}
      </span>
    </div>
  )
}

function HeroProgress({ progress }: { readonly progress: LessonProgress }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between px-1 text-label-badge">
        <span className="font-bold text-primary">{progress.percent}% Done</span>
        <span className="text-outline">
          {progress.done}/{progress.total} Mastered
        </span>
      </div>
      <div className="w-full overflow-hidden rounded-full bg-surface-container-high p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary-container transition-all duration-700 ease-out"
          style={{ width: `${String(progress.percent)}%` }}
        />
      </div>
    </div>
  )
}

interface HeroTitleProps {
  readonly titleKm: string
  readonly titleEn: string
}

function HeroTitle({ titleKm, titleEn }: HeroTitleProps) {
  return (
    <div>
      <h3 className="text-headline-lg-mobile font-extrabold leading-snug text-on-surface">
        {titleKm}
      </h3>
      <p className="text-body-sm font-semibold text-primary">{titleEn}</p>
    </div>
  )
}

function HeroAction({ onStart }: { readonly onStart: () => void }) {
  return (
    <button
      className="group mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-headline-md text-on-primary shadow-[0_4px_0_0_#004253] transition-all hover:bg-primary-container active:translate-y-1 active:shadow-[0_1px_0_0_#004253]"
      onClick={onStart}
      type="button"
    >
      <span>Start Lesson 4: Show the Carry!</span>
      <MaterialIcon
        className="text-[22px] transition-transform group-hover:translate-x-1"
        name="play_circle"
      />
    </button>
  )
}

export function GradeHeroCard({ onStart }: GradeHeroCardProps) {
  const { hero, equation } = GRADE_CONTENT

  return (
    <section className="relative mb-space-xl overflow-hidden rounded-3xl bg-gradient-to-br from-surface-container-lowest via-surface-container-lowest to-surface-container-low p-space-lg shadow-md">
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary-fixed/20 blur-xl" />
      <div className="pointer-events-none absolute right-3 top-3 text-primary opacity-15">
        <MaterialIcon className="text-[88px]" name="calculate" />
      </div>
      <div className="relative z-10 flex flex-col gap-space-sm">
        <HeroTags subtitle={hero.subtitle} unit={hero.unit} />
        <HeroTitle titleEn={hero.titleEn} titleKm={hero.titleKm} />
        <EquationTeaser equation={equation} />
        <HeroProgress progress={hero.progress} />
        <HeroAction onStart={onStart} />
      </div>
    </section>
  )
}
