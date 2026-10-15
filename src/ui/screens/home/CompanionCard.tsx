import { useState } from 'react'

import { HOME_CONTENT } from '@/domain/content/home'
import type { Companion } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface CompanionProfileProps {
  readonly companion: Companion
}

function CompanionImage({ companion }: CompanionProfileProps) {
  return (
    <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary-fixed">
      <img
        alt={companion.imageAlt}
        className="h-full w-full object-cover"
        src={companion.imageUrl}
      />
      <span className="absolute bottom-0 right-0 rounded-tl-lg bg-primary px-1.5 py-0.5 text-[10px] font-bold text-on-primary">
        {companion.level}
      </span>
    </div>
  )
}

function CompanionDetails({ companion }: CompanionProfileProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-center gap-1">
        <span className="truncate text-title-sm font-bold text-on-surface">
          {companion.name}
        </span>
        <span className="text-sm">✨</span>
      </div>
      <div className="mt-0.5 flex w-fit items-center gap-1 rounded-md bg-tertiary-fixed px-2 py-0.5 text-label-badge text-tertiary-container">
        <MaterialIcon className="text-xs" name="bolt" />
        <span>{companion.boost}</span>
      </div>
      <span className="mt-1 text-body-sm text-on-surface-variant">
        {companion.status}
      </span>
    </div>
  )
}

function CompanionProfile({ companion }: CompanionProfileProps) {
  return (
    <div className="flex items-center gap-space-md rounded-2xl bg-surface-container-lowest p-3 shadow-sm">
      <CompanionImage companion={companion} />
      <CompanionDetails companion={companion} />
    </div>
  )
}

function FeedButton() {
  const [fed, setFed] = useState(false)

  const handleFeed = () => {
    setFed(true)
    setTimeout(() => {
      setFed(false)
    }, 1500)
  }

  const toneClass = fed
    ? 'bg-secondary-fixed'
    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'

  return (
    <button
      className={`flex items-center justify-center gap-1.5 rounded-2xl px-space-sm py-2.5 text-label-badge shadow-sm transition-colors active:scale-95 ${toneClass}`}
      onClick={handleFeed}
      type="button"
    >
      <span className="text-base">{fed ? '✨' : '🍎'}</span>
      <span className="font-bold">
        {fed ? 'Sparky +20 XP!' : 'Feed Sparky'}
      </span>
    </button>
  )
}

function SanctuaryButton() {
  return (
    <button
      className="flex items-center justify-center gap-1.5 rounded-2xl bg-secondary px-space-sm py-2.5 text-label-badge text-on-secondary shadow-[0_3px_0_0_#750043] transition-all active:translate-y-0.5 active:shadow-[0_1px_0_0_#750043]"
      type="button"
    >
      <MaterialIcon className="text-base" name="cottage" />
      <span className="font-bold">Pet Sanctuary 🐾</span>
    </button>
  )
}

function CompanionActions() {
  return (
    <div className="grid grid-cols-2 gap-space-sm pt-1">
      <FeedButton />
      <SanctuaryButton />
    </div>
  )
}

export function CompanionCard() {
  const { companion } = HOME_CONTENT

  return (
    <section className="relative flex flex-col gap-space-sm overflow-hidden rounded-3xl bg-surface-container-low p-space-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <MaterialIcon className="text-xl text-secondary" name="pets" />
          <h3 className="text-headline-md text-on-surface">Math Buddy</h3>
        </div>
        <span className="rounded-full bg-secondary-fixed px-2.5 py-1 text-label-badge font-bold text-on-secondary-fixed">
          Active Companion
        </span>
      </div>
      <CompanionProfile companion={companion} />
      <CompanionActions />
    </section>
  )
}
