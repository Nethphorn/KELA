import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface NotifyToastProps {
  readonly message: string
}

export function NotifyToast({ message }: NotifyToastProps) {
  const visible = message !== ''

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-20 left-1/2 z-50 flex w-[90%] max-w-sm -translate-x-1/2 items-center justify-between gap-2 rounded-full bg-inverse-surface px-4 py-3 text-inverse-on-surface shadow-2xl transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center gap-2">
        <MaterialIcon
          className="text-[20px] text-secondary"
          name="notifications_active"
        />
        <span className="text-body-sm font-medium">
          {visible ? message : 'អ្នកនឹងទទួលបានដំណឹងឆាប់ៗ!'}
        </span>
      </div>
      <span className="rounded-full bg-surface-container-high/30 px-2 py-0.5 text-label-badge">
        Saved
      </span>
    </div>
  )
}
