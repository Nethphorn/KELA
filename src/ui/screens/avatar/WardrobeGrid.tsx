import { AvatarItemCard } from './AvatarItemCard'
import { WARDROBE_CONTENT } from '@/domain/content/wardrobe'

export function WardrobeGrid() {
  return (
    <div className="mb-space-lg grid grid-cols-2 gap-space-sm">
      {WARDROBE_CONTENT.items.map((item) => (
        <AvatarItemCard item={item} key={item.id} />
      ))}
    </div>
  )
}
