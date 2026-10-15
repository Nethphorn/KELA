import { AVATAR_URL } from './assets'
import type {
  WardrobeCategory,
  WardrobeContent,
  WardrobeItem,
} from '../types-arena'

const CATEGORIES: readonly WardrobeCategory[] = [
  { id: 'all', emoji: '✨', label: 'All Items', count: 9 },
  { id: 'hats', emoji: '🎀', label: 'Hats & Ears' },
  { id: 'clothes', emoji: '👕', label: 'Clothes' },
  { id: 'wings', emoji: '🪽', label: 'Wings & Back' },
  { id: 'magic', emoji: '⭐', label: 'Magic & Auras' },
]

const ITEMS: readonly WardrobeItem[] = [
  {
    id: 'berry-beret',
    emoji: '🍓',
    name: 'Berry Beret',
    category: 'HAT',
    rarity: 'RARE',
    rarityTone: 'secondary',
    state: 'equipped',
  },
  {
    id: 'angel-wings',
    emoji: '🪽',
    name: 'Angel Wings',
    category: 'BACK',
    rarity: 'MYTHIC',
    rarityTone: 'primary',
    state: 'equipped',
  },
  {
    id: 'star-wand',
    emoji: '⭐',
    name: 'Star Wand',
    category: 'HAND',
    rarity: 'LEGENDARY',
    rarityTone: 'tertiary',
    state: 'equipped',
  },
  {
    id: 'neko-headset',
    emoji: '🎧',
    name: 'Neko Headset',
    category: 'AUDIO',
    rarity: 'SPECIAL',
    rarityTone: 'secondary',
    state: 'owned',
  },
  {
    id: 'honey-cap',
    emoji: '🍯',
    name: 'Honey Pot Cap',
    category: 'HAT',
    rarity: 'COMMON',
    rarityTone: 'tertiary',
    state: 'owned',
  },
  {
    id: 'explorer-bag',
    emoji: '🎒',
    name: 'Explorer Bag',
    category: 'BACK',
    rarity: 'RARE',
    rarityTone: 'secondary',
    state: 'owned',
  },
  {
    id: 'dream-cloud',
    emoji: '☁️',
    name: 'Dream Cloud',
    category: 'AURA',
    rarity: 'EPIC',
    rarityTone: 'primary',
    state: 'shop',
    price: '🪙 450 Coins',
  },
  {
    id: 'math-crown',
    emoji: '👑',
    name: 'Math Crown',
    category: 'HAT',
    rarity: 'LEGENDARY',
    rarityTone: 'tertiary',
    state: 'shop',
    price: '⭐ 500 Stars',
  },
]

export const WARDROBE_CONTENT: WardrobeContent = {
  look: {
    name: 'Sparkle Buddy',
    level: 'Lv.5',
    imageUrl: AVATAR_URL,
    imageAlt:
      'Pastel 3D plush avatar wearing a cardigan, beret, wings and wand',
    tags: ['🍓 Beret', '🪽 Wings', '⭐ Wand'],
  },
  categories: CATEGORIES,
  filters: ['All', 'Owned', 'Shop'],
  items: ITEMS,
  equippedTags: ['🍓 Berry Beret', '🪽 Angel Wings', '⭐ Star Wand'],
  storeTitle: 'Need More Coins?',
  storeSubtitle: 'Solve math quests to earn 150+ coins today!',
  storeCta: 'Solve Quests',
}
