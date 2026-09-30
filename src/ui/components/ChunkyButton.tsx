import type { ReactNode } from 'react'

import { MaterialIcon } from './MaterialIcon'

export type ButtonTone = 'primary' | 'secondary' | 'tertiary' | 'success'

const TONE_CLASS: Record<ButtonTone, string> = {
  primary:
    'bg-primary text-on-primary shadow-[0_4px_0_0_#004d62] active:shadow-[0_1px_0_0_#004d62]',
  secondary:
    'bg-secondary text-on-secondary shadow-[0_4px_0_0_#8c0053] active:shadow-[0_1px_0_0_#8c0053]',
  tertiary:
    'bg-tertiary text-on-tertiary shadow-[0_3px_0_0_#492c00] active:shadow-[0_1px_0_0_#492c00]',
  success:
    'bg-emerald-600 text-white shadow-[0_3px_0_0_#065f46] active:shadow-[0_1px_0_0_#065f46]',
}

interface ChunkyButtonProps {
  readonly children: ReactNode
  readonly onClick?: () => void
  readonly tone?: ButtonTone
  readonly icon?: string
  readonly iconFilled?: boolean
  readonly className?: string
  readonly type?: 'button' | 'submit'
  readonly ariaLabel?: string
}

export function ChunkyButton({
  children,
  onClick,
  tone = 'primary',
  icon,
  iconFilled,
  className = '',
  type = 'button',
  ariaLabel,
}: ChunkyButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-title-sm transition-all active:translate-y-1 ${TONE_CLASS[tone]} ${className}`}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
      {icon === undefined ? null : (
        <MaterialIcon filled={iconFilled} name={icon} />
      )}
    </button>
  )
}
