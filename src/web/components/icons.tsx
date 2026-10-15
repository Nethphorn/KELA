/**
 * Small inline SVG icons used across the KELA dashboard. Keeping them inline
 * (rather than an icon library) keeps the embedded bundle tiny and dependency
 * free, which matters for the robot display target.
 */
import type { SVGProps } from 'react'

type IconProps = Readonly<SVGProps<SVGSVGElement>>

export function CoinIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="#f6c445"
        stroke="#e0a92b"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="5.5" fill="#f8d873" />
    </svg>
  )
}

export function FlameIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2.5c1.6 2.6 4.5 4.2 4.5 8.1A4.5 4.5 0 0 1 12 15a4.5 4.5 0 0 1-4.5-4.4C7.5 6.7 10.4 5.1 12 2.5Z"
        fill="#f97316"
      />
      <path
        d="M12 21a5 5 0 0 1-5-5c0-2.5 2-3.8 2.6-5.6.7 1.6 2.4 2.3 2.4 4.1 0-1.3 1-2 1.6-3 .9 1.4 3.4 2.9 3.4 4.5a5 5 0 0 1-5 5Z"
        fill="#fbbf24"
      />
    </svg>
  )
}

export function BellIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 16V11a6 6 0 1 0-12 0v5l-1.5 2h15L18 16Z"
        stroke="#6b7280"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 20a2 2 0 0 0 4 0"
        stroke="#6b7280"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GearIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="3" stroke="#6b7280" strokeWidth="1.8" />
      <path
        d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3"
        stroke="#6b7280"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CheckCircleIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path
        d="m8.5 12.3 2.2 2.2 4.8-4.8"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BoltIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
    </svg>
  )
}

export function PawIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="7" cy="9" r="1.8" fill="currentColor" />
      <circle cx="12" cy="7" r="1.8" fill="currentColor" />
      <circle cx="17" cy="9" r="1.8" fill="currentColor" />
      <path
        d="M12 11c-2.8 0-5 2-5 4.2 0 1.6 1.3 2.3 2.6 2.3 1 0 1.6-.5 2.4-.5s1.4.5 2.4.5c1.3 0 2.6-.7 2.6-2.3C17 13 14.8 11 12 11Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Decorative number-grid icon for the "Numbers & Counting" quest. */
export function NumberGridIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#0f9d58" />
      <text
        x="12"
        y="10.5"
        textAnchor="middle"
        fontSize="6"
        fontWeight="700"
        fill="#fff"
        fontFamily="monospace"
      >
        12
      </text>
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="6"
        fontWeight="700"
        fill="#fff"
        fontFamily="monospace"
      >
        34
      </text>
    </svg>
  )
}

export function PlusIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 6v12M6 12h12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MinusIcon(props: IconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 12h12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
