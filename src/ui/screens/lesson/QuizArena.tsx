import type { QuizQuestion } from '@/domain/types-quiz'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

type ChoiceState = 'idle' | 'correct' | 'wrong' | 'muted'

interface QuizArenaProps {
  readonly question: QuizQuestion
  readonly selected: string | null
  readonly onSelect: (choice: string) => void
  readonly onNext: () => void
  readonly isLast: boolean
}

interface ChoiceButtonProps {
  readonly label: string
  readonly state: ChoiceState
  readonly disabled: boolean
  readonly onSelect: () => void
}

const CHOICE_STYLE: Record<ChoiceState, string> = {
  idle: 'bg-surface-container-lowest text-on-surface hover:bg-surface-container',
  correct: 'bg-emerald-100 text-emerald-900 ring-2 ring-emerald-500',
  wrong: 'bg-rose-100 text-rose-900 ring-2 ring-rose-500',
  muted: 'bg-surface-container-low text-on-surface-variant opacity-70',
}

function resolveState(
  label: string,
  answer: string,
  selected: string | null,
): ChoiceState {
  if (selected === null) {
    return 'idle'
  }
  if (label === answer) {
    return 'correct'
  }
  if (label === selected) {
    return 'wrong'
  }
  return 'muted'
}

function ChoiceButton({ label, state, disabled, onSelect }: ChoiceButtonProps) {
  return (
    <button
      className={`w-full rounded-2xl px-4 py-3 text-left text-title-sm font-semibold shadow-sm transition-all active:scale-[0.99] disabled:cursor-default ${CHOICE_STYLE[state]}`}
      disabled={disabled}
      onClick={onSelect}
      type="button"
    >
      {label}
    </button>
  )
}

interface ChoiceListProps {
  readonly question: QuizQuestion
  readonly selected: string | null
  readonly onSelect: (choice: string) => void
}

function ChoiceList({ question, selected, onSelect }: ChoiceListProps) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-space-xs">
      {question.choices.map((choice) => (
        <ChoiceButton
          key={choice}
          disabled={selected !== null}
          label={choice}
          onSelect={() => {
            onSelect(choice)
          }}
          state={resolveState(choice, question.answer, selected)}
        />
      ))}
    </div>
  )
}

function FeedbackRow({ correct }: { readonly correct: boolean }) {
  const style = correct
    ? 'bg-emerald-100 text-emerald-800'
    : 'bg-rose-100 text-rose-800'
  const label = correct ? 'ត្រូវហើយ! • Correct' : 'មិនត្រូវទេ • Not quite'
  const icon = correct ? 'check_circle' : 'cancel'

  return (
    <div
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-label-badge font-bold ${style}`}
    >
      <MaterialIcon className="text-[18px]" filled name={icon} />
      <span>{label}</span>
    </div>
  )
}

interface NextButtonProps {
  readonly isLast: boolean
  readonly disabled: boolean
  readonly onNext: () => void
}

function NextButton({ isLast, disabled, onNext }: NextButtonProps) {
  return (
    <button
      className="flex w-full max-w-xs items-center justify-center gap-space-xs rounded-full bg-primary px-space-lg py-3.5 text-title-sm font-bold text-on-primary shadow-lg transition-all hover:bg-primary-container active:translate-y-1 disabled:opacity-40"
      disabled={disabled}
      onClick={onNext}
      type="button"
    >
      <span>{isLast ? 'មើលពិន្ទុ • See score' : 'បន្ត • Next'}</span>
      <MaterialIcon className="text-[20px]" name="arrow_forward" />
    </button>
  )
}

function ArenaBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-label-badge text-on-tertiary-fixed shadow-sm">
      <MaterialIcon
        className="text-[16px] text-tertiary-container"
        filled
        name="auto_awesome"
      />
      <span>ជ្រើសរើសចម្លើយ • Choose the answer</span>
    </div>
  )
}

export function QuizArena({
  question,
  selected,
  onSelect,
  onNext,
  isLast,
}: QuizArenaProps) {
  const answered = selected !== null

  return (
    <div className="relative flex w-full flex-col items-center gap-space-lg overflow-hidden rounded-3xl bg-surface-container-lowest p-space-lg shadow-xl">
      <ArenaBadge />
      <h3 className="text-center text-headline-md leading-snug text-on-surface">
        {question.prompt}
      </h3>
      <ChoiceList question={question} selected={selected} onSelect={onSelect} />
      {answered ? <FeedbackRow correct={selected === question.answer} /> : null}
      <NextButton disabled={!answered} isLast={isLast} onNext={onNext} />
    </div>
  )
}
