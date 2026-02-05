import { describe, it, expect } from 'vitest'
import { createTask } from '../services/taskService'

describe('Task Service', () => {
  it('should create a task with valid structure', () => {
    const task = createTask('Test', 'Desc')

    expect(task).toEqual(
      expect.objectContaining({
        title: 'Test',
        description: 'Desc',
        id: expect.any(String)
      })
    )
  })

  it('should generate different ids for each task', () => {
    const task1 = createTask('Task 1', '')
    const task2 = createTask('Task 2', '')

    expect(task1.id).not.toBe(task2.id)
  })

  it('should allow empty description', () => {
    const task = createTask('Title only', '')

    expect(task.description).toBe('')
  })
})