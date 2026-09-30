import { useState } from 'react'

import { WARDROBE_CONTENT } from '@/domain/content/wardrobe'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface SearchInputProps {
  readonly query: string
  readonly onChange: (query: string) => void
}

function SearchInput({ query, onChange }: SearchInputProps) {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-full bg-surface-container-lowest px-3 py-2 shadow-sm">
      <MaterialIcon
        className="text-[18px] text-on-surface-variant"
        name="search"
      />
      <input
        aria-label="Search wardrobe items"
        className="w-full bg-transparent text-body-sm text-on-surface outline-none placeholder:text-outline"
        onChange={(event) => {
          onChange(event.target.value)
        }}
        placeholder="Search wardrobe items..."
        type="text"
        value={query}
      />
    </div>
  )
}

interface FilterPillsProps {
  readonly filter: string
  readonly onChange: (filter: string) => void
}

function FilterPills({ filter, onChange }: FilterPillsProps) {
  return (
    <div className="flex items-center rounded-full bg-surface-container-low p-1 shadow-inner">
      {WARDROBE_CONTENT.filters.map((option) => (
        <button
          className={`rounded-full px-2.5 py-1 text-label-badge ${
            option === filter
              ? 'bg-surface-container-lowest text-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          key={option}
          onClick={() => {
            onChange(option)
          }}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export function FilterBar() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  return (
    <div className="mb-space-md flex items-center gap-2">
      <SearchInput onChange={setQuery} query={query} />
      <FilterPills onChange={setFilter} filter={filter} />
    </div>
  )
}
