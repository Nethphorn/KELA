import { useEffect, useState } from 'react'

interface ToastState {
  readonly message: string
  readonly show: (message: string) => void
}

export function useToast(duration = 2400): ToastState {
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (message === '') {
      return undefined
    }

    const timer = setTimeout(() => {
      setMessage('')
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [message, duration])

  return {
    message,
    show: (next: string) => {
      setMessage(next)
    },
  }
}
