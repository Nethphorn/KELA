import type { Quest } from '../data'
import { QuestCard } from './QuestCard'

interface QuestsPanelProps {
  readonly quests: Quest[]
  readonly activeCount: number
}

/** Left column: scrollable list of quest cards under a sticky header. */
export function QuestsPanel({
  quests,
  activeCount,
}: QuestsPanelProps): React.JSX.Element {
  return (
    <section className="flex min-h-0 flex-col rounded-3xl bg-white/70 p-5 ring-1 ring-black/5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-ink">
          Today&apos;s Quests &amp; Worlds
        </h2>
        <span className="rounded-full bg-quest-green-soft px-3 py-1 text-sm font-bold text-quest-green">
          {activeCount} Active
        </span>
      </div>

      <div className="no-scrollbar mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pr-1">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  )
}
