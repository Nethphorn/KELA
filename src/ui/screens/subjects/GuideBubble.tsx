import { LION_URL } from '@/domain/content/assets'
import { SUBJECTS_CONTENT } from '@/domain/content/subjects'

function GuideAvatar() {
  return (
    <div className="relative shrink-0">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary-fixed shadow-inner">
        <img
          alt="KELA AI math guide"
          className="h-full w-full object-cover"
          src={LION_URL}
        />
      </div>
      <span className="absolute -bottom-1 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-on-primary">
        ✨
      </span>
    </div>
  )
}

function GuideMeta() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-center gap-1">
        <span className="text-title-sm font-bold text-primary">
          {SUBJECTS_CONTENT.guideName}
        </span>
        <span className="rounded-full bg-tertiary-fixed px-1.5 py-0.5 text-[10px] font-bold text-tertiary">
          Guide
        </span>
      </div>
      <p className="mt-0.5 text-body-sm leading-snug text-on-surface-variant">
        {SUBJECTS_CONTENT.guideMessage}
      </p>
    </div>
  )
}

export function GuideBubble() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-space-md shadow-sm">
      <div className="flex items-start gap-3">
        <GuideAvatar />
        <GuideMeta />
      </div>
    </div>
  )
}
