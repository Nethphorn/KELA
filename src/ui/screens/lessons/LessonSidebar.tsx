import type { LessonHubSidebar } from '@/domain/types-lessons'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface SidebarProps {
  readonly sidebar: LessonHubSidebar
}

interface XpProgressProps {
  readonly current: number
  readonly max: number
}

/** XP progress label + bar for the companion. */
function XpProgress({ current, max }: XpProgressProps) {
  const pct = Math.round((current / max) * 100)

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-body-sm font-bold text-on-surface-variant">
          XP Progress
        </span>
        <span className="text-body-sm font-extrabold text-on-surface">
          {current} / {max} XP
        </span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface-container-high">
        <div
          className="h-full rounded-full bg-gradient-to-r from-secondary-fixed-dim to-secondary"
          style={{ width: `${String(pct)}%` }}
        />
      </div>
    </>
  )
}

/** Equipped-pet row inside the Math Pets card. */
function EquippedPetRow({ sidebar }: SidebarProps) {
  const { equippedPet } = sidebar

  return (
    <div className="mt-4 flex items-center gap-3 rounded-2xl bg-surface-container-lowest p-3 ring-1 ring-black/5">
      <div className="relative">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-200 to-indigo-200 text-xl">
          {equippedPet.emoji}
        </div>
        <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-blue text-[10px] font-bold text-on-primary ring-2 ring-white">
          {equippedPet.level}
        </span>
      </div>
      <div className="min-w-0">
        <span className="inline-flex items-center gap-1 rounded-full bg-quest-green-soft px-2 py-0.5 text-body-sm font-bold text-quest-green">
          Equipped ⚔️
        </span>
        <p className="mt-1 text-body-sm font-bold text-on-surface">
          {equippedPet.name}
        </p>
      </div>
    </div>
  )
}

/** Math Pets title row with the active-count pill. */
function PetsHeaderRow({ sidebar }: SidebarProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-1.5 text-headline-md font-extrabold text-on-surface">
        My Math Pets
        <MaterialIcon
          className="text-[18px] text-brand-blue"
          filled
          name="pets"
        />
      </h2>
      <span className="rounded-full bg-brand-blue-soft px-3 py-1 text-body-sm font-bold text-brand-blue">
        {sidebar.petsActiveCount} Active
      </span>
    </div>
  )
}

/** Companion avatar row with name and role. */
function CompanionHeader({ sidebar }: SidebarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 to-indigo-200 text-2xl">
          🐲
        </div>
        <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-blue text-[10px] font-bold text-on-primary ring-2 ring-white">
          {sidebar.companionLevel}
        </span>
      </div>
      <div>
        <p className="flex items-center gap-1 text-title-sm font-extrabold text-on-surface">
          {sidebar.companionName} <span className="text-body-sm">✨</span>
        </p>
        <p className="text-body-sm font-bold text-brand-blue">
          {sidebar.companionRole}
        </p>
      </div>
    </div>
  )
}

/** "My Math Pets" card: equipped pet row, boost pill, sanctuary CTA. */
function PetsCard({ sidebar }: SidebarProps) {
  return (
    <section className="rounded-3xl bg-primary-fixed/60 p-space-lg ring-1 ring-primary-fixed-dim/60">
      <PetsHeaderRow sidebar={sidebar} />
      <EquippedPetRow sidebar={sidebar} />

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-surface-container-lowest/70 px-3 py-2.5 ring-1 ring-black/5">
        <MaterialIcon
          className="text-[18px] text-secondary"
          filled
          name="bolt"
        />
        <span className="text-body-sm font-bold text-on-surface-variant">
          {sidebar.boostLabel}
        </span>
      </div>

      <button
        className="mt-4 w-full rounded-xl bg-brand-blue py-3 text-body-sm font-extrabold text-on-primary shadow-sm transition hover:bg-primary-container"
        type="button"
      >
        Visit Pet Sanctuary 🏰
      </button>
    </section>
  )
}

/** "Up Next" card showing the next scheduled challenge. */
function UpNextCard({ sidebar }: SidebarProps) {
  return (
    <section className="rounded-3xl bg-surface-container-lowest p-space-lg ring-1 ring-black/5">
      <h2 className="text-label-badge font-extrabold uppercase tracking-wider text-on-surface-variant">
        Up Next
      </h2>

      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-secondary-fixed/60 p-3 ring-1 ring-secondary-fixed">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary-fixed">
          <MaterialIcon
            className="text-[20px] text-secondary"
            filled
            name="bolt"
          />
        </div>
        <div>
          <p className="text-title-sm font-extrabold text-on-surface">
            {sidebar.upNextTitle}
          </p>
          <p className="text-body-sm font-semibold text-on-surface-variant">
            {sidebar.upNextSubtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

/** Companion card with avatar, role, and XP progress bar. */
function CompanionCard({ sidebar }: SidebarProps) {
  return (
    <section className="rounded-3xl bg-surface-container-lowest p-space-lg ring-1 ring-black/5">
      <CompanionHeader sidebar={sidebar} />
      <XpProgress
        current={sidebar.companionXpCurrent}
        max={sidebar.companionXpMax}
      />
    </section>
  )
}

export function LessonSidebar({ sidebar }: SidebarProps) {
  return (
    <div className="flex flex-col gap-space-lg">
      <PetsCard sidebar={sidebar} />
      <UpNextCard sidebar={sidebar} />
      <CompanionCard sidebar={sidebar} />
    </div>
  )
}
