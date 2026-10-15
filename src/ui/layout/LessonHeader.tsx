import { useNavigate } from 'react-router-dom'

import { LOGO_URL, PROFILE_URL } from '@/domain/content/assets'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

function BackToolbar() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-space-sm">
      <button
        aria-label="Go back"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container transition-colors hover:bg-surface-container-high active:scale-95"
        onClick={() => {
          void navigate(-1)
        }}
        type="button"
      >
        <MaterialIcon className="text-[24px] text-primary" name="arrow_back" />
      </button>
      <div className="flex items-center gap-space-xs">
        <img
          alt="KELA Math Mascot Logo"
          className="h-8 w-auto object-contain"
          src={LOGO_URL}
        />
        <h1 className="text-headline-md text-on-surface">Lesson Arena</h1>
      </div>
    </div>
  )
}

function ProfileLink() {
  return (
    <div className="rounded-full bg-surface-container-high p-0.5">
      <img
        alt="Profile"
        className="h-8 w-8 rounded-full object-cover"
        src={PROFILE_URL}
      />
    </div>
  )
}

export function LessonHeader() {
  return (
    <header className="fixed top-0 z-50 w-full pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(19,27,46,0.03)]">
      <div className="flex h-16 items-center justify-between px-gutter-mobile">
        <BackToolbar />
        <ProfileLink />
      </div>
    </header>
  )
}
