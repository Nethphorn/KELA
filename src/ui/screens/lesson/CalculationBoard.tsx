import { LESSON_CONTENT } from '@/domain/content/lesson'
import type { CarryData, LessonContent } from '@/domain/types-arena'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface CalculationBoardProps {
  readonly solved: boolean
  readonly onSolve: () => void
}

interface ColumnHeaderProps {
  readonly columns: LessonContent['columns']
}

function ColumnHeader({ columns }: ColumnHeaderProps) {
  return (
    <div className="grid w-full grid-cols-3 pb-2 text-center">
      <div className="w-10" />
      <div className="flex flex-col items-center">
        <span className="text-title-sm font-bold text-tertiary-container">
          {columns.tensKm}
        </span>
        <span className="text-label-badge text-outline">{columns.tensEn}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-title-sm font-bold text-primary">
          {columns.onesKm}
        </span>
        <span className="text-label-badge text-outline">{columns.onesEn}</span>
      </div>
    </div>
  )
}

function CarryRow({ carry }: { readonly carry: number }) {
  return (
    <div className="grid w-full grid-cols-3 items-center">
      <div className="w-10" />
      <div className="flex items-center justify-center">
        <div className="flex h-9 w-9 animate-bounce items-center justify-center rounded-full bg-tertiary-container text-title-sm font-bold text-on-tertiary shadow-md">
          {carry}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="rounded-full bg-tertiary-fixed px-2 py-0.5 text-label-badge font-medium text-tertiary">
          ត្រាទុក {carry}
        </span>
      </div>
    </div>
  )
}

interface NumberRowProps {
  readonly first: string
  readonly tens: number
  readonly ones: number
}

function NumberRow({ first, tens, ones }: NumberRowProps) {
  return (
    <div className="grid w-full grid-cols-3 items-center text-math-display text-on-surface">
      <div className="flex w-10 justify-center text-headline-lg font-bold text-primary">
        {first}
      </div>
      <div className="flex items-center justify-center">{tens}</div>
      <div className="flex items-center justify-center">{ones}</div>
    </div>
  )
}

interface ResultRowProps {
  readonly solved: boolean
  readonly onSolve: () => void
  readonly tens: number
  readonly ones: number
}

function ResultRow({ solved, onSolve, tens, ones }: ResultRowProps) {
  const solvedStyle =
    'flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-headline-lg-mobile font-bold text-on-primary-container shadow-md'
  const pendingStyle =
    'flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-highest text-headline-lg-mobile font-bold text-primary shadow-inner transition-transform active:scale-95'

  return (
    <div className="grid w-full grid-cols-3 items-center pt-1">
      <div className="w-10" />
      <div className="flex items-center justify-center">
        {solved ? (
          <div className={solvedStyle}>{tens}</div>
        ) : (
          <button className={pendingStyle} onClick={onSolve} type="button">
            ?
          </button>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-fixed text-headline-lg-mobile font-bold text-on-secondary-fixed shadow-md">
          {ones}
        </div>
      </div>
    </div>
  )
}

function tensDigit(value: number): number {
  return Math.floor(value / 10)
}

function onesDigit(value: number): number {
  return value % 10
}

interface CalculationRowsProps {
  readonly carry: CarryData
  readonly solved: boolean
  readonly onSolve: () => void
}

function CalculationRows({ carry, solved, onSolve }: CalculationRowsProps) {
  return (
    <div className="flex w-full flex-col gap-2 pb-3 pt-1">
      <CarryRow carry={carry.carry} />
      <NumberRow
        first=""
        ones={onesDigit(carry.topNumber)}
        tens={tensDigit(carry.topNumber)}
      />
      <NumberRow
        first="+"
        ones={onesDigit(carry.bottomNumber)}
        tens={tensDigit(carry.bottomNumber)}
      />
      <div className="my-1 h-1.5 w-full rounded-full bg-on-surface" />
      <ResultRow
        ones={carry.ones}
        onSolve={onSolve}
        solved={solved}
        tens={tensDigit(carry.total)}
      />
    </div>
  )
}

export function CalculationBoard({ solved, onSolve }: CalculationBoardProps) {
  const { carry, columns, validation } = LESSON_CONTENT

  return (
    <div className="flex w-full max-w-xs flex-col items-center rounded-2xl bg-surface-container-low p-space-lg shadow-sm">
      <ColumnHeader columns={columns} />
      <CalculationRows carry={carry} onSolve={onSolve} solved={solved} />
      <ValidationPill validation={validation} />
    </div>
  )
}

function ValidationPill({ validation }: { readonly validation: string }) {
  return (
    <div className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-full bg-surface-container px-3 py-1.5 text-label-badge text-on-surface-variant shadow-inner">
      <MaterialIcon
        className="text-[16px] text-primary"
        filled
        name="check_circle"
      />
      <span>{validation}</span>
    </div>
  )
}
