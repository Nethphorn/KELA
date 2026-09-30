import { useState } from 'react'

import { WARDROBE_CONTENT } from '@/domain/content/wardrobe'

function pillClass(isActive: boolean): string {
  if (isActive) {
    return 'flex flex-shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-title-sm text-on-primary shadow-md transition-transform active:scale-95'
  }
  return 'flex flex-shrink-0 items-center gap-1.5 rounded-full bg-surface-container-lowest px-4 py-2 text-title-sm text-on-surface shadow-sm transition-transform hover:bg-surface-container active:scale-95'
}

export function CategoryPills() {
  const [active, setActive] = useState('all')

  return (
    <div className="mb-space-sm mt-space-md w-full">
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
        {WARDROBE_CONTENT.categories.map((category) => (
          <button
            className={pillClass(category.id === active)}
            key={category.id}
            onClick={() => {
              setActive(category.id)
            }}
            type="button"
          >
            <span>{category.emoji}</span>
            <span>{category.label}</span>
            {category.count === undefined ? null : (
              <span className="rounded-full bg-primary-container px-1.5 py-0.5 text-[10px] text-on-primary-container">
                {category.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
