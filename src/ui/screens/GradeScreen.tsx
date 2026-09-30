import { useNavigate } from 'react-router-dom'

import { GradeCompactUnitCard } from './grade/GradeCompactUnitCard'
import { GradeHeroCard } from './grade/GradeHeroCard'
import { GradeQuestCard } from './grade/GradeQuestCard'
import { GradeSubheader } from './grade/GradeSubheader'
import { GradeTabs } from './grade/GradeTabs'
import { GradeTutorBar } from './grade/GradeTutorBar'
import { GradeUnitCard } from './grade/GradeUnitCard'
import { GRADE_CONTENT } from '@/domain/content/grades'
import { AppShell } from '@/ui/layout/AppShell'

interface TopicsSectionProps {
  readonly onOpenLesson: () => void
}

function TopicsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="flex items-center gap-2 text-headline-lg-mobile text-on-surface">
          <span>ស្វែងយល់គណិតវិទ្យា</span>
          <span className="text-title-sm font-normal text-outline">
            (Math Topics)
          </span>
        </h2>
        <p className="text-body-sm text-on-surface-variant">
          Grade 2 Learning Modules • 6 Core Units
        </p>
      </div>
      <span className="rounded-full bg-surface-container-high px-2.5 py-1 text-label-badge font-bold text-primary">
        6 Units
      </span>
    </div>
  )
}

function TopicsSection({ onOpenLesson }: TopicsSectionProps) {
  const fullUnits = GRADE_CONTENT.units.filter((unit) => !unit.compact)
  const compactUnits = GRADE_CONTENT.units.filter((unit) => unit.compact)

  return (
    <section className="flex flex-col gap-space-md">
      <TopicsHeader />
      {fullUnits.map((unit) => (
        <GradeUnitCard key={unit.id} onContinue={onOpenLesson} unit={unit} />
      ))}
      <div className="grid grid-cols-2 gap-space-sm">
        {compactUnits.map((unit) => (
          <GradeCompactUnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </section>
  )
}

export function GradeScreen() {
  const navigate = useNavigate()

  const openLesson = () => {
    void navigate('/lesson/4')
  }

  return (
    <AppShell section="Subjects">
      <GradeSubheader />
      <GradeTabs />
      <GradeHeroCard onStart={openLesson} />
      <TopicsSection onOpenLesson={openLesson} />
      <GradeQuestCard />
      <GradeTutorBar />
    </AppShell>
  )
}
