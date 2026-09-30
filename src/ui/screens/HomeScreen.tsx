import { ActiveLessonCard } from './home/ActiveLessonCard'
import { CoachBanner } from './home/CoachBanner'
import { CompanionCard } from './home/CompanionCard'
import { LevelCard } from './home/LevelCard'
import { QuestCard } from './home/QuestCard'
import { QuickStatsRow } from './home/QuickStatsRow'
import { HOME_CONTENT } from '@/domain/content/home'
import { AppShell } from '@/ui/layout/AppShell'

export function HomeScreen() {
  return (
    <AppShell section="Home">
      <LevelCard />
      <QuickStatsRow />
      <ActiveLessonCard />
      <CompanionCard />
      <section className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-headline-lg-mobile text-on-surface">
            Today&apos;s Quests &amp; Worlds
          </h3>
          <span className="rounded-full bg-primary-fixed-dim px-2.5 py-1 text-label-badge font-bold text-on-primary-fixed-variant">
            3 Active
          </span>
        </div>
        {HOME_CONTENT.quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </section>
      <CoachBanner />
    </AppShell>
  )
}
