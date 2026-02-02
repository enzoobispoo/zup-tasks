import { describe, it, expect } from 'vitest'
import { createTask } from '../services/taskService'

describe('Task Service', () => {
  it('should create a task correctly', () => {
    const task = createTask('Test', 'Desc')

    expect(task.title).toBe('Test')
    expect(task.description).toBe('Desc')
    expect(task.id).toBeDefined()
  })
})