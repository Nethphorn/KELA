import { HOME_CONTENT } from '@/domain/content/home'
import { STAT_TONE_CLASS } from '@/ui/lib/tones'

export function QuickStatsRow() {
  return (
    <section className="grid grid-cols-3 gap-2">
      {HOME_CONTENT.quickStats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest p-2.5 text-center shadow-sm"
        >
          <span className="mb-0.5 text-xl">{stat.icon}</span>
          <span
            className={`text-headline-md leading-none ${STAT_TONE_CLASS[stat.tone]}`}
          >
            {stat.value}
          </span>
          <span className="mt-1 text-label-badge text-on-surface-variant">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  )
}
