import { NavLink } from 'react-router-dom'

import { NAV_ITEMS } from '@/domain/content/nav'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-50 w-full pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(19,27,46,0.04)]">
      <div className="flex h-16 items-center justify-around px-gutter">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive }) =>
              `flex min-h-[48px] min-w-[56px] flex-col items-center justify-center ${
                isActive
                  ? 'font-bold text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`
            }
            end={item.path === '/'}
            to={item.path}
          >
            <MaterialIcon className="text-[24px]" name={item.icon} />
            <span className="mt-0.5 text-label-badge">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
