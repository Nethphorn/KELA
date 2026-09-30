import { useState } from 'react'

import { WARDROBE_CONTENT } from '@/domain/content/wardrobe'
import type { AvatarLook } from '@/domain/types-arena'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

const TAG_POSITIONS = [
  'absolute right-1 top-2 animate-bounce text-secondary',
  'absolute bottom-4 left-1 text-primary',
  'absolute bottom-2 right-3 text-tertiary-container',
]

interface PreviewControlsProps {
  readonly look: AvatarLook
  readonly onRotate: () => void
}

function PreviewControls({ look, onRotate }: PreviewControlsProps) {
  return (
    <div className="relative z-10 flex w-full items-center justify-between">
      <div className="flex items-center gap-1.5 rounded-full bg-surface-container-low px-2.5 py-1 shadow-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        <span className="text-label-badge text-on-surface-variant">
          {look.name} • {look.level}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <button
          aria-label="Rotate avatar"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-low text-on-surface shadow-sm transition-all hover:bg-surface-variant active:scale-90"
          onClick={onRotate}
          type="button"
        >
          <MaterialIcon className="text-[18px]" name="replay" />
        </button>
        <button
          aria-label="Randomize outfit"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-low text-on-surface shadow-sm transition-all hover:bg-surface-variant active:scale-90"
          type="button"
        >
          <MaterialIcon className="text-[18px]" name="shuffle" />
        </button>
      </div>
    </div>
  )
}

interface AvatarPedestalProps {
  readonly look: AvatarLook
  readonly rotation: number
}

function AvatarPedestal({ look, rotation }: AvatarPedestalProps) {
  return (
    <div className="relative my-space-sm flex h-52 w-52 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-secondary-fixed/50 to-primary-fixed/40 p-2 shadow-inner">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-surface-container-lowest shadow-[0_8px_20px_rgba(253,86,167,0.15)]">
          <img
            alt={look.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500"
            src={look.imageUrl}
            style={{ transform: `rotateY(${String(rotation)}deg) scale(1.05)` }}
          />
        </div>
      </div>
      {look.tags.map((tag, index) => (
        <span
          key={tag}
          className={`flex items-center gap-1 rounded-full bg-surface-container-lowest px-2 py-0.5 text-label-badge shadow-md ${TAG_POSITIONS[index]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function RotateHint() {
  return (
    <div className="relative z-10 flex items-center gap-1.5 rounded-full bg-surface-container-low/90 px-3 py-1 text-on-surface-variant shadow-sm backdrop-blur">
      <MaterialIcon className="text-[16px] text-primary" name="360" />
      <span className="text-label-badge">Tap rotate or swipe 360°</span>
    </div>
  )
}

export function AvatarPreview() {
  const { look } = WARDROBE_CONTENT
  const [rotation, setRotation] = useState(0)

  return (
    <div className="relative my-space-sm flex w-full flex-col items-center overflow-hidden rounded-3xl bg-surface-container-lowest p-space-md shadow-md">
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-secondary-fixed opacity-40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-primary-fixed opacity-40 blur-2xl" />
      <PreviewControls
        look={look}
        onRotate={() => {
          setRotation(rotation + 180)
        }}
      />
      <AvatarPedestal look={look} rotation={rotation} />
      <RotateHint />
    </div>
  )
}
