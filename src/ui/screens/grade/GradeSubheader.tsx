import { GRADE_CONTENT } from '@/domain/content/grades'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

function Breadcrumb() {
  const [world, standard] = GRADE_CONTENT.breadcrumb

  return (
    <div className="flex flex-wrap items-center gap-space-xs">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-3 py-1 text-label-badge text-on-surface-variant">
        <span>🧮</span>
        <span>{world}</span>
        <span className="text-outline-variant">•</span>
        <span className="font-bold text-primary">{standard}</span>
      </div>
      <div className="inline-flex items-center gap-1 rounded-full bg-secondary-fixed px-2.5 py-1 text-label-badge text-on-secondary-fixed shadow-sm">
        <span>🇰🇭</span>
        <span>Cambodia Curricula</span>
      </div>
    </div>
  )
}

function MoeyBadge() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl bg-surface-container-lowest p-2 text-center shadow-sm">
      <MaterialIcon
        className="text-[20px] text-tertiary-container"
        filled
        name="verified"
      />
      <span className="text-label-badge text-on-surface-variant">MOEYS</span>
    </div>
  )
}

export function GradeSubheader() {
  return (
    <section className="mb-space-md mt-space-sm flex flex-col gap-space-xs">
      <Breadcrumb />
      <div className="mt-space-xs flex items-center justify-between">
        <div>
          <p className="text-label-badge uppercase tracking-wider text-secondary">
            សិក្សាគណិតវិទ្យាថ្នាក់បឋម
          </p>
          <h2 className="text-headline-lg-mobile text-on-surface">
            {GRADE_CONTENT.titleKm}{' '}
            <span className="text-body-md font-normal text-on-surface-variant">
              {GRADE_CONTENT.titleEn}
            </span>
          </h2>
        </div>
        <MoeyBadge />
      </div>
    </section>
  )
}
