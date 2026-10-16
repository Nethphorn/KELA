import type { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

/** Quest ids that have an interactive lesson page wired up. */
export const QUESTS_WITH_LESSON = new Set<string>(['unit-3'])

/** Props spread onto a quest card to make it keyboard- and click-accessible. */
export interface LessonLinkProps {
  onClick?: () => void
  role?: 'button'
  tabIndex?: number
  onKeyDown?: (event: KeyboardEvent) => void
}

/**
 * Returns the accessibility/interaction props for a quest card. When the quest
 * has a lesson, the card behaves as a button that navigates to its lesson page;
 * otherwise it returns an empty object (non-interactive).
 */
export function useLessonLink(questId: string): {
  hasLesson: boolean
  linkProps: LessonLinkProps
} {
  const navigate = useNavigate()
  const hasLesson = QUESTS_WITH_LESSON.has(questId)

  if (!hasLesson) {
    return { hasLesson, linkProps: {} }
  }

  const openLesson = (): void => {
    void navigate(`/unit/${questId}`)
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
