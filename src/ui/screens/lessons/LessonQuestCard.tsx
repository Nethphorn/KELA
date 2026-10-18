import { useLessonLink } from './useLessonLink'
import type { LessonCatalogItem } from '@/domain/types-lessons'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import type { LessonAccentStyles } from '@/ui/lib/lessonAccents'
import { LESSON_ACCENT } from '@/ui/lib/lessonAccents'

interface LessonQuestCardProps {
  readonly item: LessonCatalogItem
}

interface StyledProps {
  readonly item: LessonCatalogItem
  readonly styles: LessonAccentStyles
}

/** Top row: icon tile + optional status pill. */
function QuestHeaderRow({ item, styles }: StyledProps) {
  return (
    <div className="flex items-start justify-between">
      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl ${styles.tileBg}`}
      >
        <MaterialIcon
          className={`text-[28px] ${styles.tileText}`}
          filled
          name={item.icon}
        />
      </div>

      {item.statusLabel === '' ? null : (
        <span
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-title-sm font-bold ${styles.statusPill}`}
        >
          {item.status === 'completed' ? (
            <MaterialIcon className="text-[16px]" filled name="check_circle" />
          ) : null}
          <span className="font-khmer">{item.statusLabel}</span>
        </span>
      )}
    </div>
  )
}

/** Unit label + lesson count row. */
function QuestUnitRow({ item, styles }: StyledProps) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className={`text-body-sm font-bold font-khmer ${styles.unitText}`}>
        {item.unitLabel}
      </span>
      <span className="text-body-sm font-semibold text-on-surface-variant font-khmer">
        {item.lessonCountLabel}
      </span>
    </div>
  )
}

/** Khmer title, Latin subtitle, and optional description. */
function QuestTitleBlock({ item, styles }: StyledProps) {
  return (
    <>
      <h3 className="mt-1 text-headline-md font-extrabold text-on-surface font-khmer">
        {item.titleKhmer}
      </h3>
      <p className={`mt-0.5 text-body-sm font-bold ${styles.unitText}`}>
        {item.subtitleLatin}
      </p>
      {item.description === undefined ? null : (
        <p className="mt-1 text-body-sm text-on-surface-variant font-khmer">
          {item.description}
        </p>
      )}
    </>
  )
}

/** Progress bar plus the optional label/fraction row beneath it. */
function QuestProgress({ item, styles }: StyledProps) {
  const hasLabels =
    item.progressLabelKhmer !== '' || item.progressFractionLabel !== ''

  return (
    <>
      <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-surface-container-high">
        <div
          className={`h-full rounded-full ${styles.bar}`}
          style={{ width: `${String(item.progressPercent)}%` }}
        />
      </div>

      {hasLabels ? (
        <div className="mt-2 flex items-center justify-between">
          <span
            className={`text-body-sm font-bold font-khmer ${styles.fractionText}`}
          >
            {item.progressLabelKhmer}
          </span>
          <span
            className={`text-body-sm font-extrabold ${styles.fractionText}`}
          >
            {item.progressFractionLabel}
          </span>
        </div>
      ) : null}
    </>
  )
}

/** The static inner content shared by clickable and plain cards. */
function QuestCardBody({ item, styles }: StyledProps) {
  return (
    <>
      {item.ribbonLabel === undefined ? null : (
        <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-gradient-to-r from-quest-orange to-secondary px-3 py-1.5 text-label-badge font-bold text-on-secondary">
          <span className="font-khmer">{item.ribbonLabel}</span>
        </div>
      )}

      <QuestHeaderRow item={item} styles={styles} />
      <QuestUnitRow item={item} styles={styles} />
      <QuestTitleBlock item={item} styles={styles} />
      <QuestProgress item={item} styles={styles} />

      {item.lessonId === undefined ? null : (
        <p className="mt-4 text-body-sm font-extrabold text-quest-orange font-khmer">
          ចុចដើម្បីចាប់ផ្តើមមេរៀន • Tap to start lesson →
        </p>
      )}
    </>
  )
}

export function LessonQuestCard({ item }: LessonQuestCardProps) {
  const styles = LESSON_ACCENT[item.accent]
  const isCurrent = item.status === 'current'
  const { hasLesson, linkProps } = useLessonLink(item.lessonId)

  const ring = isCurrent ? 'ring-2 ring-primary/40' : 'ring-1 ring-black/5'
  const clickable = hasLesson
    ? 'cursor-pointer transition hover:-translate-y-0.5 hover:ring-2 hover:ring-quest-orange focus-within:ring-2 focus-within:ring-quest-orange'
    : ''

  return (
    <article
      className={`relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md ${ring} ${clickable}`}
      {...linkProps}
    >
      <QuestCardBody item={item} styles={styles} />
    </article>
  )
}
