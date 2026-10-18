import type { LessonHubContent } from '../types-lessons'

/**
 * Lesson selection catalog powering the lesson hub.
 *
 * Adapted from the lesson-3 dashboard quest list while pointing at the quiz
 * data registered in `domain/content/lessons.ts` (Unit 2 = fractions,
 * Unit 3 = addition).
 */
export const LESSON_HUB: LessonHubContent = {
  activeCount: 2,
  items: [
    {
      id: 'unit-1',
      icon: 'tag',
      accent: 'green',
      unitLabel: 'Unit 1 • មេរៀនទី ១',
      titleKhmer: 'ចំនួន និងការរាប់',
      subtitleLatin: 'Numbers & Counting',
      lessonCountLabel: '៦ មេរៀន',
      statusLabel: 'បានបញ្ចប់ 100%',
      status: 'completed',
      progressPercent: 100,
      progressLabelKhmer: 'បានរៀនរួចសព្វគ្រប់',
      progressFractionLabel: '6/6',
    },
    {
      id: 'unit-2',
      lessonId: 2,
      icon: 'pie_chart',
      accent: 'blue',
      unitLabel: 'Unit 2 • មេរៀនទី ២',
      titleKhmer: 'ប្រភាគ',
      subtitleLatin: 'Fractions Focus',
      lessonCountLabel: '៥ មេរៀន',
      statusLabel: '',
      status: 'current',
      progressPercent: 80,
      progressLabelKhmer: 'នៅសល់ ១ មេរៀនទៀត',
      progressFractionLabel: '4/5',
      ribbonLabel: 'កំពុងសិក្សາ Current',
    },
    {
      id: 'unit-3',
      lessonId: 3,
      icon: 'add',
      accent: 'orange',
      unitLabel: 'Unit 3 • មេរៀនទី ៣',
      titleKhmer: 'វិធីបូក',
      subtitleLatin: 'Addition & Carrying',
      description:
        'បូកចំនួនធំ និងការត្រាទុក • Adding large numbers, carrying & problem solving',
      lessonCountLabel: '៥ មេរៀន',
      statusLabel: 'វឌ្ឍនភាព 60%',
      status: 'in-progress',
      progressPercent: 60,
      progressLabelKhmer: '',
      progressFractionLabel: '',
    },
  ],
  sidebar: {
    petsActiveCount: 2,
    equippedPet: {
      name: 'Lv. 4 Math Dragon',
      level: 4,
      emoji: '🐲',
    },
    boostLabel: 'Companion Boost: +10%',
    upNextTitle: 'Speed Math Blast',
    upNextSubtitle: '60s Challenge • 2:00 PM',
    companionName: 'Sparky the Dragon',
    companionRole: 'Level 4 Math Companion',
    companionLevel: 4,
    companionXpCurrent: 340,
    companionXpMax: 500,
  },
}
