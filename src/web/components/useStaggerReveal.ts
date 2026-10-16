import { useEffect, useState } from 'react'

/**
 * Reveals `total` items one at a time on an interval, starting from the first.
 * Returns how many are currently shown plus a `reset` to replay the reveal.
 */
export function useStaggerReveal(
  total: number,
  intervalMs = 650,
): { shown: number; done: boolean; reset: () => void } {
  const [shown, setShown] = useState(1)

  useEffect(() => {
    if (shown >= total) {
      return
    }
    const timer = setTimeout(() => {
      setShown((count) => count + 1)
    }, intervalMs)
    return () => {
      clearTimeout(timer)
    }
  }, [shown, total, intervalMs])

  return {
    shown,
    done: shown >= total,
    reset: () => {
      setShown(1)
    },
  }
}
