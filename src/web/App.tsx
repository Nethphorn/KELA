import { CompanionCard } from './components/CompanionCard'
import { Header } from './components/Header'
import { MathPetsCard } from './components/MathPetsCard'
import { QuestsPanel } from './components/QuestsPanel'
import { UpNextCard } from './components/UpNextCard'
import { dashboardData } from './data'

/**
 * KELA dashboard shell.
 *
 * The whole UI lives inside a fixed 1000x1000 square because it targets a
 * robot display rather than a responsive web page. The square scales down to
 * fit smaller viewports via `min()` while preserving its 1:1 aspect ratio.
 */
export function Dashboard(): React.JSX.Element {
  const data = dashboardData

  return (
    <main
      className="flex flex-col overflow-hidden bg-cream shadow-2xl"
      style={{
        width: 'min(100vw, 100vh)',
        height: 'min(100vw, 100vh)',
        aspectRatio: '1 / 1',
      }}
    >
      <Header stats={data.header} />

      {/* Two-column body */}
      <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_1fr] gap-5 p-5">
        {/* Left column */}
        <QuestsPanel quests={data.quests} activeCount={data.activeQuestCount} />

        {/* Right column */}
        <div className="no-scrollbar flex min-h-0 flex-col gap-5 overflow-y-auto">
          <MathPetsCard
            pet={data.equippedPet}
            activeCount={data.petsActiveCount}
            boostLabel={data.companionBoostLabel}
          />
          <UpNextCard upNext={data.upNext} />
          <CompanionCard companion={data.companion} />
        </div>
      </div>
    </main>
  )
}
