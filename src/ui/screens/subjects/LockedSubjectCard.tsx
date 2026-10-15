import type { SubjectCard } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ICON_TONE_CLASS } from '@/ui/lib/tones'

interface LockedSubjectCardProps {
  readonly subject: SubjectCard
  readonly onNotify: (name: string) => void
}

function LockedHeading({ subject }: { readonly subject: SubjectCard }) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${ICON_TONE_CLASS[subject.tone]}`}
        >
          <MaterialIcon className="text-[26px]" name={subject.icon} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-headline-md text-on-surface">
              {subject.titleKm}
            </span>
            <span className="rounded-full bg-surface-container px-2 py-0.5 text-label-badge font-bold text-on-surface-variant">
              {subject.badge}
            </span>
          </div>
          <span className="text-body-md text-on-surface-variant">
            {subject.titleEn}
          </span>
        </div>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-outline">
        <MaterialIcon className="text-[18px]" name="lock" />
      </div>
    </div>
  )
}

function LockedFooter({ subject, onNotify }: LockedSubjectCardProps) {
  const handleNotify = () => {
    onNotify(`${subject.titleKm} (${subject.titleEn})`)
  }

  return (
    <div className="mt-3 flex items-center justify-between pt-2">
      <span className="text-label-badge text-outline">{subject.footer}</span>
      <button
        className="rounded-full bg-surface-container-high px-3 py-1.5 text-label-badge font-bold text-on-surface transition-all active:scale-95"
        onClick={handleNotify}
        type="button"
      >
        Notify Me 🔔
      </button>
    </div>
  )
}

export function LockedSubjectCard({
  subject,
  onNotify,
}: LockedSubjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest/80 p-space-md shadow-sm">
      <LockedHeading subject={subject} />
      <p className="mt-2 text-body-sm text-on-surface-variant">
        {subject.description}
      </p>
      <LockedFooter onNotify={onNotify} subject={subject} />
    </div>
  )
}
