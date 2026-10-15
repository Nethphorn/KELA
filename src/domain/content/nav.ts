import type { CurrencyStat, NavItem } from '../types'

export const NAV_ITEMS: readonly NavItem[] = [
  { path: '/', label: 'Home', icon: 'cottage' },
  { path: '/subjects', label: 'Subjects', icon: 'menu_book' },
  { path: '/avatar', label: 'Avatar Studio', icon: 'styler' },
  { path: '/progress', label: 'Progress', icon: 'military_tech' },
]

export const HEADER_STATS: readonly CurrencyStat[] = [
  { id: 'coins', icon: '🪙', value: '1,250', tone: 'tertiary' },
  { id: 'stars', icon: '⭐', value: '350', tone: 'tertiary' },
  { id: 'streak', icon: '🔥', value: '7d', tone: 'secondary' },
]
