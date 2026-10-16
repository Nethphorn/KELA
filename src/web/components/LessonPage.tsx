import type { LessonModule } from '../lessonContent'
import { unit3Lesson } from '../lessonContent'
import { buildSlides } from '../lessonSlides'
import { StepperControls, StepperHeader } from './LessonStepper'
import { SlideStage } from './SlideStage'
import { useSlideStepper } from './useSlideStepper'

interface LessonPageProps {
  /** The lesson module to render. Defaults to the Unit 3 addition lesson. */
  readonly lesson?: LessonModule
}

/** The scrollable center stage; keyed so the slide-in animation replays. */
function SlideFrame({
  slide,
  stepKey,
}: {
  readonly slide: Parameters<typeof SlideStage>[0]['slide']
  readonly stepKey: number
}): React.JSX.Element {
  return (
    <div className="no-scrollbar flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-6">
      <div key={stepKey} className="w-full animate-slide-in">
        <SlideStage slide={slide} />
      </div>
    </div>
  )
}

/**
 * Single square, animated lesson page. The lesson is flattened into slides and
 * shown one at a time; each slide animates in. Navigate with the on-screen
 * controls or the left/right arrow keys.
 */
/** Fixed 1:1 square sizing shared with the dashboard shell. */
const SQUARE_STYLE: React.CSSProperties = {
  width: 'min(100vw, 100vh)',
  height: 'min(100vw, 100vh)',
  aspectRatio: '1 / 1',
}

export function LessonPage({
  lesson = unit3Lesson,
}: LessonPageProps): React.JSX.Element {
  const slides = buildSlides(lesson)
  const { index, goPrev, goNext } = useSlideStepper(slides.length)
  const slide = slides[index]

  return (
    <main
      className="flex flex-col overflow-hidden bg-cream shadow-2xl"
      style={SQUARE_STYLE}
    >
      <StepperHeader
        meta={lesson.meta}
        slide={slide}
        index={index}
        total={slides.length}
      />
      <SlideFrame slide={slide} stepKey={index} />
      <StepperControls
        index={index}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </main>
  )
}
