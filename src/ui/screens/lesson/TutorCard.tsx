import { LESSON_CONTENT } from '@/domain/content/lesson'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface TutorCardProps {
  readonly speechKm: string
  readonly speechEn: string
  readonly onHint: () => void
}

function TutorAvatar() {
  return (
    <div className="relative flex-shrink-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed shadow-sm">
        <MaterialIcon
          className="text-[28px] text-primary"
          filled
          name="smart_toy"
        />
      </div>
      <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-tertiary-fixed shadow-sm">
        <MaterialIcon className="text-[12px] text-tertiary" name="volume_up" />
      </div>
    </div>
  )
}

interface SpeechBoxProps {
  readonly speechKm: string
  readonly speechEn: string
}

function SpeechBox({ speechKm, speechEn }: SpeechBoxProps) {
  return (
    <div className="mt-1 rounded-2xl bg-surface-container-low p-space-sm">
      <p className="text-body-md leading-snug text-on-surface">{speechKm}</p>
      <p className="mt-1 text-body-sm text-on-surface-variant">{speechEn}</p>
    </div>
  )
}

function TutorActions({ onHint }: { readonly onHint: () => void }) {
  return (
    <div className="flex items-center gap-space-xs pt-1">
      <button
        className="flex flex-1 items-center justify-center gap-1 rounded-full bg-surface-container px-3 py-2 text-title-sm text-on-surface transition-all hover:bg-surface-container-high active:scale-95"
        onClick={onHint}
        type="button"
      >
        <MaterialIcon className="text-[18px] text-tertiary" name="lightbulb" />
        <span>សុំជំនួយ (Hint)</span>
      </button>
      <button
        className="flex flex-1 items-center justify-center gap-1 rounded-full bg-primary-fixed px-3 py-2 text-title-sm text-on-primary-fixed transition-all hover:bg-primary-fixed-dim active:scale-95"
        type="button"
      >
        <MaterialIcon className="text-[18px] text-primary" name="volume_up" />
        <span>អានជាសំឡេង</span>
      </button>
    </div>
  )
}

export function TutorCard({ speechKm, speechEn, onHint }: TutorCardProps) {
  const { tutor } = LESSON_CONTENT

  return (
    <div className="relative mt-space-md flex w-full flex-col gap-space-sm overflow-hidden rounded-3xl bg-surface-container-lowest p-space-md shadow-md">
      <div className="flex items-start gap-space-sm">
        <TutorAvatar />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-title-sm font-bold text-primary">
              {tutor.name}
            </span>
            <span className="rounded-full bg-secondary-fixed px-2 py-0.5 text-label-badge font-semibold text-on-secondary-fixed">
              {tutor.badge}
            </span>
          </div>
          <SpeechBox speechEn={speechEn} speechKm={speechKm} />
        </div>
      </div>
      <TutorActions onHint={onHint} />
    </div>
  )
}
