import type { MathPet } from '../data'
import { BoltIcon, PawIcon } from './icons'

interface MathPetsCardProps {
  readonly pet: MathPet
  readonly activeCount: number
  readonly boostLabel: string
}

/** The equipped-pet row inside the Math Pets card. */
function EquippedPet({ pet }: { readonly pet: MathPet }): React.JSX.Element {
  return (
    <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5">
      <div className="relative">
        <div
          className={`h-12 w-12 rounded-xl bg-gradient-to-br ${pet.avatarGradient} grid place-items-center text-xl`}
        >
          🐲
        </div>
        <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-blue text-[10px] font-bold text-white ring-2 ring-white">
          {pet.level}
        </span>
      </div>
      <div className="min-w-0">
        <span className="inline-flex items-center gap-1 rounded-full bg-quest-green-soft px-2 py-0.5 text-xs font-bold text-quest-green">
          Equipped ⚔️
        </span>
        <p className="mt-1 text-sm font-bold text-ink">{pet.name}</p>
      </div>
    </div>
  )
}

/** "My Math Pets" title row with the active-count pill. */
function PetsHeaderRow({
  activeCount,
}: {
  readonly activeCount: number
}): React.JSX.Element {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-1.5 text-xl font-extrabold text-ink">
        My Math Pets
        <PawIcon className="h-4 w-4 text-indigo-400" />
      </h2>
      <span className="rounded-full bg-brand-blue-soft px-3 py-1 text-xs font-bold text-brand-blue">
        {activeCount} Active
      </span>
    </div>
  )
}

/** "My Math Pets" card: equipped pet row, boost pill, sanctuary CTA. */
export function MathPetsCard({
  pet,
  activeCount,
  boostLabel,
}: MathPetsCardProps): React.JSX.Element {
  return (
    <section className="rounded-3xl bg-indigo-100/70 p-5 ring-1 ring-indigo-200/60">
      <PetsHeaderRow activeCount={activeCount} />

      <EquippedPet pet={pet} />

      {/* Boost pill */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2.5 ring-1 ring-black/5">
        <BoltIcon className="h-4 w-4 text-amber-500" />
        <span className="text-sm font-bold text-gray-600">{boostLabel}</span>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-brand-blue py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-indigo-700"
      >
        Visit Pet Sanctuary 🏰
      </button>
    </section>
  )
}
