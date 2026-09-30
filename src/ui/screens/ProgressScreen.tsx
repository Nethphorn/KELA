import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { AppShell } from '@/ui/layout/AppShell'

export function ProgressScreen() {
  return (
    <AppShell section="Progress">
      <section className="mt-4 flex flex-col items-center gap-space-md rounded-3xl bg-surface-container-lowest p-space-lg text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed text-primary">
          <MaterialIcon className="text-[32px]" filled name="military_tech" />
        </div>
        <h2 className="text-headline-lg-mobile text-on-surface">
          Progress Tracker
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Your Learning Journey hub is coming soon! Track lessons, badges and
          XP.
        </p>
      </section>
    </AppShell>
  )
}
