import { MATH_BLOCKS_URL } from '@/domain/content/assets'
import type { SubjectCard, TopicPill } from '@/domain/types'
import { ChunkyButton } from '@/ui/components/ChunkyButton'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ProgressBar } from '@/ui/components/ProgressBar'

interface SubjectProps {
  readonly subject: SubjectCard
}

interface FeaturedSubjectCardProps extends SubjectProps {
  readonly onStart: () => void
}

function SubjectIdentity({ subject }: SubjectProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-fixed shadow-inner">
        <MaterialIcon
          className="text-[32px] text-primary"
          name={subject.icon}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-headline-md text-on-surface">
            {subject.titleKm}
          </span>
          <span className="rounded-full bg-secondary-fixed px-2 py-0.5 text-label-badge font-bold text-secondary">
            {subject.badge}
          </span>
        </div>
        <span className="text-title-sm font-semibold text-primary">
          {subject.titleEn}
        </span>
      </div>
    </div>
  )
}

function ReadyPill() {
  return (
    <div className="flex items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-1">
      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
      <span className="text-label-badge font-bold uppercase text-primary">
        Ready
      </span>
    </div>
  )
}

function SubjectHeading({ subject }: SubjectProps) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-2">
      <SubjectIdentity subject={subject} />
      <ReadyPill />
    </div>
  )
}

function SubjectVisualStrip({ subject }: SubjectProps) {
  const percent = subject.progress?.percent ?? 0

  return (
    <div className="mt-4 flex items-center gap-2 rounded-xl bg-surface-container-low p-2.5">
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
        <img
          alt="Playful 3D math blocks"
          className="h-full w-full object-cover"
          src={MATH_BLOCKS_URL}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
          <span>
            {subject.description} ({subject.meta})
          </span>
          <span className="font-bold text-primary">{percent}% បានរៀន</span>
        </div>
        <div className="mt-1">
          <ProgressBar heightClass="h-2.5" value={percent} />
        </div>
      </div>
    </div>
  )
}

function SubjectTopics({ topics }: { readonly topics: readonly TopicPill[] }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {topics.map((topic) => (
        <span
          key={topic.id}
          className="rounded-full bg-surface-container-high px-2 py-1 text-label-badge text-on-surface"
        >
          {topic.label}
        </span>
      ))}
    </div>
  )
}

export function FeaturedSubjectCard({
  subject,
  onStart,
}: FeaturedSubjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-[0_8px_24px_rgba(0,90,113,0.08)]">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-fixed/40 blur-2xl" />
      <SubjectHeading subject={subject} />
      <SubjectVisualStrip subject={subject} />
      {subject.topics === undefined ? null : (
        <SubjectTopics topics={subject.topics} />
      )}
      <div className="mt-4 flex items-center justify-between pt-1">
        <div className="flex items-center gap-1 text-tertiary">
          <span className="text-sm">⭐</span>
          <span className="text-label-badge font-bold">{subject.footer}</span>
        </div>
        <ChunkyButton className="py-2" icon="arrow_forward" onClick={onStart}>
          ចូលរៀន Math
        </ChunkyButton>
      </div>
    </div>
  )
}
