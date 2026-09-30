import { LESSON_CONTENT } from '@/domain/content/lesson'

export function GalleryStrip() {
  return (
    <div className="mt-space-md grid w-full grid-cols-2 gap-space-sm">
      {LESSON_CONTENT.gallery.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-1 rounded-2xl bg-surface-container-low p-space-sm text-center"
        >
          <img
            alt={item.imageAlt}
            className="h-20 w-full rounded-2xl object-cover shadow-sm"
            src={item.imageUrl}
          />
          <span className="mt-1 text-label-badge text-on-surface">
            {item.caption}
          </span>
        </div>
      ))}
    </div>
  )
}
