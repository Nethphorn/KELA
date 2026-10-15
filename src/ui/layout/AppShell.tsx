import type { ReactNode } from 'react'

import { AppHeader } from './AppHeader'
import { BottomNav } from './BottomNav'

interface AppShellProps {
  readonly section: string
  readonly children: ReactNode
}

export function AppShell({ section, children }: AppShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <AppHeader section={section} />
      <main className="flex flex-1 flex-col gap-space-md px-margin-mobile pt-24 pb-24">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
