import {beforeEach, afterEach, describe, expect, it, vi} from 'vitest'

// Mock console.log to capture output
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {
  // Intentionally empty - we just want to capture calls without output
})

describe('main function', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    mockConsoleLog.mockClear()
  })

  afterEach(() => {
    // Restore original implementation after each test
    mockConsoleLog.mockRestore()
  })

  it('should print "Hello, World!" to console', async () => {
    // Import and execute the module (which calls main())
    await import('./index.js')

    // Verify console.log was called with expected message
    expect(mockConsoleLog).toHaveBeenCalledWith('Hello, World!')
    expect(mockConsoleLog).toHaveBeenCalledTimes(1)
  })

  it('should execute main function automatically on module import', async () => {
    // Re-import to test auto-execution
    await import('./index.js')

    // Verify the function was executed
    expect(mockConsoleLog).toHaveBeenCalled()
  })
})
