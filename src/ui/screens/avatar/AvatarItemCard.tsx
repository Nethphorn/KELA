import type { AccentTone } from '@/domain/types'
import type { WardrobeItem } from '@/domain/types-arena'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { TEXT_TONE_CLASS } from '@/ui/lib/tones'

const CATEGORY_CHIP_CLASS: Record<AccentTone, string> = {
  primary: 'bg-primary-fixed text-on-primary-fixed',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed',
  tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
}

interface AvatarItemCardProps {
  readonly item: WardrobeItem
}

function StateBadge({ item }: AvatarItemCardProps) {
  if (item.state === 'equipped') {
    return (
      <span className="flex items-center gap-0.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
        <MaterialIcon className="text-[12px]" name="check_circle" /> In Use
      </span>
    )
  }
  if (item.state === 'shop') {
    return (
      <span className="flex items-center gap-0.5 rounded-full bg-tertiary-fixed px-1.5 py-0.5 text-[10px] font-bold text-on-tertiary-fixed">
        <MaterialIcon className="text-[11px]" name="lock" /> Shop
      </span>
    )
  }
  return (
    <span className="rounded-full bg-surface-container-high px-1.5 py-0.5 text-[10px] text-on-surface-variant">
      Owned
    </span>
  )
}

function shopToneClass(price: string): string {
  if (price.includes('🪙')) {
    return 'bg-tertiary text-on-tertiary shadow-[0_3px_0_0_#492c00] active:shadow-[0_1px_0_0_#492c00]'
  }
  return 'bg-secondary text-on-secondary shadow-[0_3px_0_0_#600037] active:shadow-[0_1px_0_0_#600037]'
}

function ActionButton({ item }: AvatarItemCardProps) {
  if (item.state === 'equipped') {
    return (
      <button
        className="w-full rounded-full bg-emerald-600 py-1.5 text-[12px] font-bold text-white shadow-[0_3px_0_0_#065f46] transition-all active:translate-y-0.5 active:shadow-[0_1px_0_0_#065f46]"
        type="button"
      >
        Equipped
      </button>
    )
  }
  if (item.state === 'owned') {
    return (
      <button
        className="w-full rounded-full bg-secondary-fixed py-1.5 text-[12px] font-bold text-secondary shadow-sm transition-all hover:bg-secondary hover:text-on-secondary active:translate-y-0.5"
        type="button"
      >
        Wear
      </button>
    )
  }
  return (
    <button
      className={`flex w-full items-center justify-center gap-1 rounded-full py-1.5 text-[12px] font-bold transition-all active:translate-y-0.5 ${shopToneClass(item.price ?? '')}`}
      type="button"
    >
      <span>{item.price}</span>
    </button>
  )
}

function ItemEmoji({ item }: AvatarItemCardProps) {
  return (
    <div className="mt-1 flex h-24 w-full items-center justify-center rounded-2xl bg-surface-container-low p-2">
      <span className="select-none text-4xl transition-transform hover:scale-110">
        {item.emoji}
      </span>
    </div>
  )
}

function ItemMeta({ item }: AvatarItemCardProps) {
  return (
    <div className="mt-space-xs">
      <div className="flex items-center gap-1">
        <span
          className={`rounded px-1 text-[9px] ${CATEGORY_CHIP_CLASS[item.rarityTone]}`}
        >
          {item.category}
        </span>
        <span
          className={`text-[10px] font-bold ${TEXT_TONE_CLASS[item.rarityTone]}`}
        >
          {item.rarity}
        </span>
      </div>
      <h4 className="mt-0.5 truncate text-title-sm font-bold leading-tight text-on-surface">
        {item.name}
      </h4>
    </div>
  )
}

export function AvatarItemCard({ item }: AvatarItemCardProps) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-lowest p-space-sm shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="absolute right-2 top-2">
        <StateBadge item={item} />
      </div>
      <ItemEmoji item={item} />
      <ItemMeta item={item} />
      <div className="mt-2">
        <ActionButton item={item} />
      </div>
    </div>
  )
}
