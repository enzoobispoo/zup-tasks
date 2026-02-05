import { describe, it, expect, beforeEach } from 'vitest'
import { act } from '@testing-library/react'
import { useTasksStore } from '../store/useTasksStore'
import { createTask } from '../services/taskService'

describe('useTasks hook', () => {
  beforeEach(() => {
    useTasksStore.setState({ tasks: [] })
  })

  it('should add a task', () => {
    const task = createTask('Test', 'Desc')

    act(() => {
      useTasksStore.getState().addTask(task)
    })

    const state = useTasksStore.getState()

    expect(state.tasks.length).toBe(1)
    expect(state.tasks[0].title).toBe('Test')
  })

  it('should delete a task', () => {
    const task = createTask('Delete me', '')

    act(() => {
      useTasksStore.getState().addTask(task)
      useTasksStore.getState().deleteTask(task.id)
    })

    const state = useTasksStore.getState()

    expect(state.tasks.length).toBe(0)
  })

  it('should update a task', () => {
    const task = createTask('Old', '')

    act(() => {
      useTasksStore.getState().addTask(task)
      useTasksStore.getState().updateTask({
        ...task,
        title: 'New',
      })
    })

    const state = useTasksStore.getState()

    expect(state.tasks[0].title).toBe('New')
  })
})