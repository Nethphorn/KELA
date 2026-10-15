import { useState } from 'react'

import { GRADE_CONTENT } from '@/domain/content/grades'
import type { GradeTab } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface GradeTabProps {
  readonly tab: GradeTab
}

function ActiveTabButton({ tab }: GradeTabProps) {
  return (
    <button
      aria-selected="true"
      className="relative flex flex-col items-center justify-center rounded-2xl bg-primary px-5 py-2.5 text-on-primary shadow-md shadow-primary/25 transition-all active:scale-95"
      role="tab"
      type="button"
    >
      <div className="flex items-center gap-1.5">
        <span className="text-headline-md leading-none">{tab.titleKm}</span>
        <MaterialIcon
          className="text-[18px] text-primary-fixed"
          name="check_circle"
        />
      </div>
      <span className="mt-0.5 text-label-badge font-bold text-primary-fixed">
        {tab.titleEn} • Active
      </span>
      <span className="absolute -right-1 -top-1.5 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-container opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary" />
      </span>
    </button>
  )
}

function InactiveTabButton({
  tab,
  onClick,
}: {
  readonly tab: GradeTab
  readonly onClick: () => void
}) {
  return (
    <button
      className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest px-4 py-2.5 text-on-surface-variant shadow-sm transition-all hover:bg-surface-container active:scale-95"
      onClick={onClick}
      role="tab"
      type="button"
    >
      <span className="text-headline-md leading-none">{tab.titleKm}</span>
      <span className="mt-0.5 text-label-badge text-outline">
        {tab.titleEn}
      </span>
    </button>
  )
}

export function GradeTabs() {
  const [active, setActive] = useState(2)

  return (
    <section className="no-scrollbar -mx-margin-mobile mb-space-lg w-full overflow-x-auto px-margin-mobile py-1">
      <div className="flex min-w-max items-center gap-space-xs" role="tablist">
        {GRADE_CONTENT.tabs.map((tab) =>
          tab.id === active ? (
            <ActiveTabButton key={tab.id} tab={tab} />
          ) : (
            <InactiveTabButton
              key={tab.id}
              onClick={() => {
                setActive(tab.id)
              }}
              tab={tab}
            />
          ),
        )}
      </div>
    </section>
  )
}
