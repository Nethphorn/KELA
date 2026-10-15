interface MaterialIconProps {
  readonly name: string
  readonly className?: string
  readonly filled?: boolean
}

export function MaterialIcon({ name, className, filled }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined${
        className === undefined ? '' : ` ${className}`
      }`}
      style={
        filled === true ? { fontVariationSettings: "'FILL' 1" } : undefined
      }
    >
      {name}
    </span>
  )
}
