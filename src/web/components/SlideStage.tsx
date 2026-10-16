import type { Slide } from '../lessonSlides'
import { CheckView } from './CheckView'
import { ExerciseView } from './ExerciseView'
import { HookView, ObjectiveView, TeachView, WrapUpView } from './SlideViews'
import { WorkedExampleView } from './WorkedExampleView'

/** Renders the teaching slides (objective, hook, teach, worked, check). */
function TeachingSlide({
  slide,
}: {
  readonly slide: Slide
}): React.JSX.Element | null {
  if (slide.kind === 'objective') {
    return <ObjectiveView meta={slide.meta} />
  }
  if (slide.kind === 'hook') {
    return <HookView hook={slide.hook} />
  }
  if (slide.kind === 'teach') {
    return <TeachView teachStep={slide.teachStep} total={slide.total} />
  }
  if (slide.kind === 'worked') {
    return <WorkedExampleView worked={slide.worked} />
  }
  if (slide.kind === 'check') {
    return <CheckView check={slide.check} />
  }
  return null
}

/** Renders the correct animated view for a slide. */
export function SlideStage({
  slide,
}: {
  readonly slide: Slide
}): React.JSX.Element {
  if (slide.kind === 'exercise') {
    return (
      <ExerciseView
        exercise={slide.exercise}
        position={slide.position}
        total={slide.total}
      />
    )
  }
  if (slide.kind === 'wrapUp') {
    return <WrapUpView wrapUp={slide.wrapUp} masteryRule={slide.masteryRule} />
  }
  return <TeachingSlide slide={slide} />
}
