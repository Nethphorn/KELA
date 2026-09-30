import { WARDROBE_CONTENT } from '@/domain/content/wardrobe'

export function StoreBanner() {
  const { storeTitle, storeSubtitle, storeCta } = WARDROBE_CONTENT

  return (
    <div className="mb-space-md flex w-full items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-primary-fixed to-surface-variant p-space-md shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-xl shadow-sm">
          🏬
        </div>
        <div className="flex flex-col">
          <span className="text-headline-md font-bold leading-tight text-primary">
            {storeTitle}
          </span>
          <span className="text-body-sm leading-tight text-on-surface-variant">
            {storeSubtitle}
          </span>
        </div>
      </div>
      <button
        className="whitespace-nowrap rounded-full bg-primary px-3 py-1.5 text-label-badge font-bold text-on-primary shadow-sm"
        type="button"
      >
        {storeCta}
      </button>
    </div>
  )
}
