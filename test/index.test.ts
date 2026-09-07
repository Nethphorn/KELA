import { describe, expect, it, jest } from '@jest/globals'

import { greet } from '../src/index'

describe('👋 greet function', () => {
  it('👋 should print a greeting message', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const name = 'User'
    greet(name)
    expect(consoleSpy).toHaveBeenCalledWith(
      `Hello, ${name}! 👋 Welcome to my project template.`,
    )
    consoleSpy.mockRestore()
  })
})
