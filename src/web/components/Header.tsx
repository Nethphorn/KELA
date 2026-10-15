import type { HeaderStats } from '../data'
import { BellIcon, CoinIcon, FlameIcon, GearIcon } from './icons'

interface HeaderProps {
  readonly stats: HeaderStats
}

/** Coins + streak pills shown in the header. */
function StatPills({
  coins,
  streakDays,
}: {
  readonly coins: number
  readonly streakDays: number
}): React.JSX.Element {
  return (
    <>
      <div className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1.5 ring-1 ring-amber-200">
        <CoinIcon className="h-4 w-4" />
        <span className="text-sm font-extrabold text-amber-700">
          {coins.toLocaleString()}
        </span>
      </div>

      <div className="flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1.5 ring-1 ring-orange-200">
        <FlameIcon className="h-4 w-4" />
        <span className="text-sm font-extrabold text-orange-600">
          {streakDays}d streak
        </span>
      </div>
    </>
  )
}

/** A single circular icon button in the header. */
function IconButton({
  label,
  children,
}: {
  readonly label: string
  readonly children: React.ReactNode
}): React.JSX.Element {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
    >
      {children}
    </button>
  )
}

/** The avatar circle with its level badge. */
function AvatarBadge({
  avatarBadge,
}: {
  readonly avatarBadge: number
}): React.JSX.Element {
  return (
    <div className="relative">
      <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-amber-300 to-orange-400 ring-2 ring-white shadow-sm grid place-items-center text-lg">
        🧸
      </div>
      <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-blue text-[10px] font-bold text-white ring-2 ring-white">
        {avatarBadge}
      </span>
    </div>
  )
}

/** Top bar: brand on the left, stats + account controls on the right. */
export function Header({ stats }: HeaderProps): React.JSX.Element {
  return (
    <header className="flex items-center justify-between bg-white px-7 py-4 border-b border-black/5">
      <div className="leading-tight">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">
          KELA
        </h1>
        <p className="text-xs font-semibold text-gray-500">
          Daily Learning Assistant
        </p>
      </div>

      <div className="flex items-center gap-3">
        <StatPills coins={stats.coins} streakDays={stats.streakDays} />
        <IconButton label="Notifications">
          <BellIcon className="h-5 w-5" />
        </IconButton>
        <IconButton label="Settings">
          <GearIcon className="h-5 w-5" />
        </IconButton>
        <AvatarBadge avatarBadge={stats.avatarBadge} />
      </div>
    </header>
  )
}
