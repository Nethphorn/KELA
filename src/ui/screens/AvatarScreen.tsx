import { AvatarHeader } from './avatar/AvatarHeader'
import { AvatarPreview } from './avatar/AvatarPreview'
import { CategoryPills } from './avatar/CategoryPills'
import { EquippedBar } from './avatar/EquippedBar'
import { FilterBar } from './avatar/FilterBar'
import { StoreBanner } from './avatar/StoreBanner'
import { WardrobeGrid } from './avatar/WardrobeGrid'
import { AppShell } from '@/ui/layout/AppShell'

export function AvatarScreen() {
  return (
    <AppShell section="Avatar Studio">
      <AvatarHeader />
      <AvatarPreview />
      <CategoryPills />
      <FilterBar />
      <WardrobeGrid />
      <StoreBanner />
      <EquippedBar />
    </AppShell>
  )
}
