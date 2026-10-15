import type { Companion } from '../data'

interface CompanionCardProps {
  readonly companion: Companion
}

interface XpProgressProps {
  readonly current: number
  readonly max: number
}

/** XP progress label + bar for the companion. */
function XpProgress({ current, max }: XpProgressProps): React.JSX.Element {
  const pct = Math.round((current / max) * 100)

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-bold text-gray-500">XP Progress</span>
        <span className="text-sm font-extrabold text-ink">
          {current} / {max} XP
        </span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-300 to-amber-500"
          style={{ width: `${String(pct)}%` }}
        />
      </div>
    </>
  )
}

/** Companion card with avatar, role, and XP progress bar. */
export function CompanionCard({
  companion,
}: CompanionCardProps): React.JSX.Element {
  return (
    <section className="rounded-3xl bg-white p-5 ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div
            className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${companion.avatarGradient} grid place-items-center text-2xl`}
          >
            🐲
          </div>
          <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-blue text-[10px] font-bold text-white ring-2 ring-white">
            {companion.level}
          </span>
        </div>
        <div>
          <p className="flex items-center gap-1 text-base font-extrabold text-ink">
            {companion.name} <span className="text-sm">✨</span>
          </p>
          <p className="text-sm font-bold text-brand-blue">
            {companion.roleLabel}
          </p>
        </div>
      </div>

      <XpProgress current={companion.xpCurrent} max={companion.xpMax} />
    </section>
  )
}
