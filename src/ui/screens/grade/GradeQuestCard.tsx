import { OWL_URL } from '@/domain/content/assets'
import { GRADE_CONTENT } from '@/domain/content/grades'

export function GradeQuestCard() {
  const { dailyQuest } = GRADE_CONTENT

  return (
    <section className="relative mt-space-lg flex items-center gap-space-md overflow-hidden rounded-3xl bg-surface-container-low p-space-md shadow-sm">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-surface-container-lowest p-1 shadow-sm">
        <img
          alt="Cute 3D owl maths mascot"
          className="h-full w-full rounded-xl object-contain"
          src={OWL_URL}
        />
      </div>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-label-badge font-bold text-primary">
            {dailyQuest.title}
          </span>
          <span className="rounded-full bg-tertiary-fixed px-1.5 py-0.5 text-[10px] font-extrabold text-on-tertiary-fixed">
            {dailyQuest.reward}
          </span>
        </div>
        <p className="truncate text-body-sm text-on-surface">
          {dailyQuest.description}
        </p>
        <span className="mt-0.5 text-label-badge font-bold text-secondary">
          {dailyQuest.streak}
        </span>
      </div>
    </section>
  )
}
