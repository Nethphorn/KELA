import { useState } from 'react'

import { WARDROBE_CONTENT } from '@/domain/content/wardrobe'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

type SaveState = 'idle' | 'saving' | 'saved'

function saveLabel(state: SaveState): string {
  if (state === 'saving') {
    return 'SAVING MAGIC...'
  }
  if (state === 'saved') {
    return 'AVATAR SAVED! ✨'
  }
  return 'APPLY & SAVE AVATAR'
}

function saveIcon(state: SaveState): string {
  if (state === 'saving') {
    return 'sync'
  }
  if (state === 'saved') {
    return 'check_circle'
  }
  return 'magic_button'
}

function saveButtonClass(state: SaveState): string {
  if (state === 'idle') {
    return 'bg-secondary text-on-secondary shadow-[0_5px_0_0_#8c0053]'
  }
  return 'bg-emerald-600 text-white shadow-[0_5px_0_0_#065f46]'
}

function SaveButton() {
  const [state, setState] = useState<SaveState>('idle')

  const handleSave = () => {
    setState('saving')
    setTimeout(() => {
      setState('saved')
    }, 800)
  }

  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-headline-md font-extrabold transition-all active:translate-y-1 ${saveButtonClass(state)}`}
      onClick={handleSave}
      type="button"
    >
      <MaterialIcon
        className={`text-[22px] ${state === 'saving' ? 'animate-spin' : ''}`}
        name={saveIcon(state)}
      />
      <span>{saveLabel(state)}</span>
    </button>
  )
}

function EquippedTag({ tag }: { readonly tag: string }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary-fixed/70 px-2.5 py-1 text-xs font-semibold text-on-secondary-fixed shadow-sm">
      <span>{tag}</span>
      <button
        aria-label={`Remove ${tag}`}
        className="text-on-secondary-fixed hover:text-error"
        type="button"
      >
        <MaterialIcon className="text-[14px]" name="close" />
      </button>
    </div>
  )
}

export function EquippedBar() {
  const { equippedTags } = WARDROBE_CONTENT

  return (
    <div className="flex w-full flex-col gap-space-sm rounded-3xl bg-surface-container-lowest p-space-md shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-label-badge font-bold uppercase tracking-wider text-on-surface-variant">
          Currently Equipped ({equippedTags.length})
        </span>
        <button
          className="text-label-badge font-bold text-secondary hover:underline"
          type="button"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {equippedTags.map((tag) => (
          <EquippedTag key={tag} tag={tag} />
        ))}
      </div>
      <div className="mt-1">
        <SaveButton />
      </div>
    </div>
  )
}
