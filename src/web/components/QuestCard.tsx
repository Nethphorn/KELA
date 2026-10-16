import type { Quest } from '../data'
import { CheckCircleIcon, MinusIcon, NumberGridIcon, PlusIcon } from './icons'
import { useLessonLink } from './questCardNavigation'
import type { AccentStyles } from './questCardStyles'
import { accent } from './questCardStyles'

interface QuestCardProps {
  readonly quest: Quest
}

function QuestTileIcon({
  quest,
}: {
  readonly quest: Quest
}): React.JSX.Element {
  const styles = accent[quest.accent]
  if (quest.icon === '1234') {
    return <NumberGridIcon className="h-9 w-9" />
  }
  if (quest.icon === 'plus') {
    return <PlusIcon className={`h-8 w-8 ${styles.tileText}`} />
  }
  return <MinusIcon className={`h-8 w-8 ${styles.tileText}`} />
}

/** Top row: icon tile + optional status pill. */
function QuestHeaderRow({
  quest,
  styles,
}: {
  readonly quest: Quest
  readonly styles: AccentStyles
}): React.JSX.Element {
  return (
    <div className="flex items-start justify-between">
      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl ${styles.tileBg}`}
      >
        <QuestTileIcon quest={quest} />
      </div>

      {quest.statusLabel !== '' && (
        <span
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold ${styles.statusPill}`}
        >
          {quest.status === 'completed' && (
            <CheckCircleIcon className={`h-4 w-4 ${styles.tileText}`} />
          )}
          <span className="font-khmer">{quest.statusLabel}</span>
        </span>
      )}
    </div>
  )
}

/** Unit label + lesson count row. */
function QuestUnitRow({
  quest,
  styles,
}: {
  readonly quest: Quest
  readonly styles: AccentStyles
}): React.JSX.Element {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className={`text-sm font-bold ${styles.unitText} font-khmer`}>
        {quest.unitLabel}
      </span>
      <span className="text-sm font-semibold text-gray-500 font-khmer">
        {quest.lessonCountLabel}
      </span>
    </div>
  )
}

/** Khmer title, Latin subtitle, and optional description. */
function QuestTitleBlock({
  quest,
  styles,
}: {
  readonly quest: Quest
  readonly styles: AccentStyles
}): React.JSX.Element {
  return (
    <>
      <h3 className="mt-1 text-2xl font-extrabold text-ink font-khmer">
        {quest.titleKhmer}
      </h3>
      <p className={`mt-0.5 text-sm font-bold ${styles.unitText}`}>
        {quest.subtitleLatin}
      </p>
      {quest.description !== undefined && (
        <p className="mt-1 text-sm text-gray-500 font-khmer">
          {quest.description}
        </p>
      )}
    </>
  )
}

/** The label + fraction row shown beneath the progress bar. */
function QuestProgressLabels({
  quest,
  styles,
}: {
  readonly quest: Quest
  readonly styles: AccentStyles
}): React.JSX.Element {
  return (
    <div className="mt-2 flex items-center justify-between">
      <span className={`text-sm font-bold ${styles.fractionText} font-khmer`}>
        {quest.progressLabelKhmer}
      </span>
      <span className={`text-sm font-extrabold ${styles.fractionText}`}>
        {quest.progressFractionLabel}
      </span>
    </div>
  )
}

/** Progress bar plus the optional label/fraction row beneath it. */
function QuestProgress({
  quest,
  styles,
}: {
  readonly quest: Quest
  readonly styles: AccentStyles
}): React.JSX.Element {
  const hasLabels =
    quest.progressLabelKhmer !== '' || quest.progressFractionLabel !== ''

  return (
    <>
      <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full ${styles.bar}`}
          style={{ width: `${String(quest.progressPercent)}%` }}
        />
      </div>

      {hasLabels && <QuestProgressLabels quest={quest} styles={styles} />}
    </>
  )
}

/** The static inner content shared by clickable and plain quest cards. */
function QuestCardBody({
  quest,
  styles,
  hasLesson,
}: {
  readonly quest: Quest
  readonly styles: AccentStyles
  readonly hasLesson: boolean
}): React.JSX.Element {
  return (
    <>
      {quest.ribbonLabel !== undefined && (
        <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1.5 text-xs font-bold text-white">
          <span className="font-khmer">{quest.ribbonLabel}</span>
        </div>
      )}

      <QuestHeaderRow quest={quest} styles={styles} />
      <QuestUnitRow quest={quest} styles={styles} />
      <QuestTitleBlock quest={quest} styles={styles} />
      <QuestProgress quest={quest} styles={styles} />

      {hasLesson && (
        <p className="mt-4 text-sm font-extrabold text-quest-orange font-khmer">
          ចុចដើម្បីចាប់ផ្តើមមេរៀន • Tap to start lesson →
        </p>
      )}
    </>
  )
}

export function QuestCard({ quest }: QuestCardProps): React.JSX.Element {
  const styles = accent[quest.accent]
  const isCurrent = quest.status === 'current'
  const { hasLesson, linkProps } = useLessonLink(quest.id)

  const ring = isCurrent ? 'ring-2 ring-brand-blue/40' : 'ring-1 ring-black/5'
  const clickable = hasLesson
    ? 'cursor-pointer transition hover:-translate-y-0.5 hover:ring-2 hover:ring-quest-orange focus-within:ring-2 focus-within:ring-quest-orange'
    : ''

  return (
    <article
      className={`relative overflow-hidden rounded-2xl bg-white p-5 ${ring} ${clickable}`}
      {...linkProps}
    >
      <QuestCardBody quest={quest} styles={styles} hasLesson={hasLesson} />
    </article>
  )
}
