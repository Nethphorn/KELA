import type { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export interface LessonLinkProps {
  onClick?: () => void
  role?: 'button'
  tabIndex?: number
  onKeyDown?: (event: KeyboardEvent) => void
}

/**
 * Interaction props that turn a quest card into a keyboard-accessible link to
 * its playable lesson quiz. Returns empty props when the card has no lesson.
 */
export function useLessonLink(lessonId: number | undefined): {
  hasLesson: boolean
  linkProps: LessonLinkProps
} {
  const navigate = useNavigate()
  const hasLesson = lessonId !== undefined

  if (lessonId === undefined) {
    return { hasLesson, linkProps: {} }
  }

  const openLesson = (): void => {
    void navigate(`/lesson/${String(lessonId)}`)
  }

  return {
    hasLesson,
    linkProps: {
      onClick: openLesson,
      role: 'button',
      tabIndex: 0,
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openLesson()
        }
      },
    },
  }
}
