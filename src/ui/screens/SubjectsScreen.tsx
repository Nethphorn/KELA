import { useNavigate } from 'react-router-dom'

import { DailyPickBanner } from './subjects/DailyPickBanner'
import { FeaturedSubjectCard } from './subjects/FeaturedSubjectCard'
import { GuideBubble } from './subjects/GuideBubble'
import { LanguageToggle } from './subjects/LanguageToggle'
import { LockedSubjectCard } from './subjects/LockedSubjectCard'
import { NotifyToast } from './subjects/NotifyToast'
import { SubjectSearch } from './subjects/SubjectSearch'
import { SUBJECTS_CONTENT } from '@/domain/content/subjects'
import { AppShell } from '@/ui/layout/AppShell'
import { useToast } from '@/ui/lib/useToast'

function SubjectsHeader() {
  return (
    <div className="mt-1 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-base">🎒</span>
          <span className="text-headline-md tracking-tight text-on-surface">
            {SUBJECTS_CONTENT.headingKm} • {SUBJECTS_CONTENT.headingEn}
          </span>
        </div>
        <p className="text-body-sm text-on-surface-variant">
          {SUBJECTS_CONTENT.subtitle}
        </p>
      </div>
      <LanguageToggle />
    </div>
  )
}

interface SubjectListProps {
  readonly onOpenMath: () => void
  readonly onNotify: (name: string) => void
}

function SubjectList({ onOpenMath, onNotify }: SubjectListProps) {
  return (
    <div className="mt-1 flex flex-col gap-space-md">
      <FeaturedSubjectCard
        onStart={onOpenMath}
        subject={SUBJECTS_CONTENT.featured}
      />
      {SUBJECTS_CONTENT.locked.map((subject) => (
        <LockedSubjectCard
          key={subject.id}
          onNotify={onNotify}
          subject={subject}
        />
      ))}
    </div>
  )
}

export function SubjectsScreen() {
  const navigate = useNavigate()
  const { message, show } = useToast()

  return (
    <AppShell section="Subjects">
      <SubjectSearch />
      <SubjectsHeader />
      <GuideBubble />
      <SubjectList
        onNotify={show}
        onOpenMath={() => {
          void navigate('/math')
        }}
      />
      <DailyPickBanner
        onStart={() => {
          void navigate('/lesson/2')
        }}
      />
      <NotifyToast message={message} />
    </AppShell>
  )
}
