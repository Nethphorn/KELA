import { MaterialIcon } from '@/ui/components/MaterialIcon'

export function AvatarHeader() {
  return (
    <div className="flex items-center justify-between gap-2 py-space-sm">
      <div className="flex items-center gap-1.5 rounded-full bg-surface-container-lowest px-3 py-1.5 shadow-sm">
        <span className="text-sm">🎨</span>
        <span className="text-title-sm text-primary">Wardrobe Studio</span>
      </div>
      <button
        className="flex items-center gap-1 rounded-full bg-surface-container-high px-3 py-1.5 transition-colors hover:bg-surface-variant"
        type="button"
      >
        <span className="flex items-center gap-1 text-body-sm font-semibold text-on-surface">
          ✨ Dreamy Buddy #1
        </span>
        <MaterialIcon
          className="text-[16px] text-on-surface-variant"
          name="expand_more"
        />
      </button>
    </div>
  )
}
