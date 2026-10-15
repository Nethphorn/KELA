import { useState } from 'react'

import { SUBJECTS_CONTENT } from '@/domain/content/subjects'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface VoiceSearchButtonProps {
  readonly listening: boolean
  readonly onClick: () => void
}

function VoiceSearchButton({ listening, onClick }: VoiceSearchButtonProps) {
  const toneClass = listening
    ? 'bg-secondary text-on-secondary'
    : 'bg-surface-container-high text-primary hover:bg-primary-fixed'

  return (
    <button
      aria-label="Voice search"
      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${toneClass}`}
      onClick={onClick}
      type="button"
    >
      <MaterialIcon className="text-[18px]" name="mic" />
    </button>
  )
}

export function SubjectSearch() {
  const [query, setQuery] = useState('')
  const [listening, setListening] = useState(false)

  const handleMic = () => {
    setListening(true)
    setQuery('គណិតវិទ្យា Grade 2')
    setTimeout(() => {
      setListening(false)
    }, 1500)
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-space-xs rounded-full bg-surface-container-lowest px-4 py-3 shadow-[0_2px_12px_rgba(19,27,46,0.05)]">
        <MaterialIcon className="text-[22px] text-outline" name="search" />
        <input
          aria-label="Search subjects"
          className="w-full bg-transparent text-body-md text-on-surface placeholder:text-outline focus:outline-none"
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          placeholder={SUBJECTS_CONTENT.searchPlaceholder}
          type="text"
          value={query}
        />
        <VoiceSearchButton listening={listening} onClick={handleMic} />
      </div>
    </div>
  )
}
