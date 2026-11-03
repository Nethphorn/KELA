import { LessonQuestsPanel } from './LessonQuestsPanel'
import { LessonSidebar } from './LessonSidebar'
import { LESSON_HUB } from '@/domain/content/lessonCatalog'
import { AppShell } from '@/ui/layout/AppShell'

export function LessonsScreen() {
  return (
    <AppShell section="Lessons">
      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-[1.55fr_1fr]">
        <LessonQuestsPanel
          activeCount={LESSON_HUB.activeCount}
          items={LESSON_HUB.items}
        />
        <LessonSidebar sidebar={LESSON_HUB.sidebar} />
      </div>
    </AppShell>
  )
}
