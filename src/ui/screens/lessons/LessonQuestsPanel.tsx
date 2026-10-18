import { LessonQuestCard } from './LessonQuestCard'
import type { LessonCatalogItem } from '@/domain/types-lessons'

interface LessonQuestsPanelProps {
  readonly items: readonly LessonCatalogItem[]
  readonly activeCount: number
}

/** Left column: scrollable list of lesson quest cards under a header. */
export function LessonQuestsPanel({
  items,
  activeCount,
}: LessonQuestsPanelProps) {
  return (
    <section className="flex min-h-0 flex-col rounded-3xl bg-surface-container-lowest/80 p-space-lg ring-1 ring-black/5">
      <div className="flex items-center justify-between">
        <h2 className="text-headline-md font-extrabold text-on-surface">
          Today&apos;s Quests &amp; Worlds
        </h2>
        <span className="rounded-full bg-quest-green-soft px-3 py-1 text-title-sm font-bold text-quest-green">
          {activeCount} Active
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-space-md">
        {items.map((item) => (
          <LessonQuestCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
