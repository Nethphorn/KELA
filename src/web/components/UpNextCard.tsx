import type { UpNext } from '../data'
import { BoltIcon } from './icons'

interface UpNextCardProps {
  readonly upNext: UpNext
}

/** "Up Next" card showing the next scheduled challenge. */
export function UpNextCard({ upNext }: UpNextCardProps): React.JSX.Element {
  return (
    <section className="rounded-3xl bg-white p-5 ring-1 ring-black/5">
      <h2 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
        Up Next
      </h2>

      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-amber-50 p-3 ring-1 ring-amber-100">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200">
          <BoltIcon className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <p className="text-base font-extrabold text-ink">{upNext.title}</p>
          <p className="text-sm font-semibold text-gray-500">
            {upNext.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
