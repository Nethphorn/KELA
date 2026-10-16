import { useCallback, useEffect, useState } from 'react'

/**
 * Stepper state for the lesson slides: current index plus prev/next handlers,
 * wired to the left/right arrow keys.
 */
export function useSlideStepper(count: number): {
  index: number
  goPrev: () => void
  goNext: () => void
} {
  const [index, setIndex] = useState(0)

  const goPrev = useCallback(() => {
    setIndex((current) => Math.max(0, current - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((current) => Math.min(count - 1, current + 1))
  }, [count])

  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft') {
        goPrev()
      } else if (event.key === 'ArrowRight') {
        goNext()
      }
    }
    globalThis.addEventListener('keydown', onKey)
    return () => {
      globalThis.removeEventListener('keydown', onKey)
    }
  }, [goPrev, goNext])

  return { index, goPrev, goNext }
}
