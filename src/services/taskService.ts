import type { Task } from '../types/Task'

export const createTask = (title: string, description: string): Task => {
  return {
    id: crypto.randomUUID(),
    title,
    description,
  }
}