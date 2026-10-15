import { LOGO_URL, PROFILE_URL } from '@/domain/content/assets'
import { HEADER_STATS } from '@/domain/content/nav'
import { STAT_TONE_CLASS } from '@/ui/lib/tones'

interface AppHeaderProps {
  readonly section: string
}

function BrandBlock({ section }: AppHeaderProps) {
  return (
    <div className="flex items-center gap-space-xs">
      <img
        alt="KELA Math Mascot Logo"
        className="h-8 w-auto object-contain"
        src={LOGO_URL}
      />
      <div className="flex flex-col">
        <span className="text-headline-md leading-none text-primary">
          KELA Kids
        </span>
        <span className="mt-0.5 text-label-badge leading-none text-on-surface-variant">
          {section}
        </span>
      </div>
    </div>
  )
}

function HeaderStats() {
  return (
    <div className="flex items-center gap-space-xs overflow-x-auto py-1">
      {HEADER_STATS.map((stat) => (
        <div
          key={stat.id}
          className="flex items-center gap-1 rounded-full bg-surface-container-lowest px-2 py-1 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
        >
          <span className="text-sm">{stat.icon}</span>
          <span
            className={`text-label-badge font-bold ${STAT_TONE_CLASS[stat.tone]}`}
          >
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  )
}

function ProfileAvatar() {
  return (
    <div className="relative flex-shrink-0">
      <div className="rounded-full bg-surface-container-high p-0.5">
        <img
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
          src={PROFILE_URL}
        />
      </div>
    </div>
  )
}

export function AppHeader({ section }: AppHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(19,27,46,0.03)]">
      <div className="flex h-20 items-center justify-between gap-space-sm px-margin-mobile">
        <BrandBlock section={section} />
        <HeaderStats />
        <ProfileAvatar />
      </div>
    </header>
  )
}
