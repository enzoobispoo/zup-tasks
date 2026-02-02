import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Task } from '../types/Task'

interface TasksState {
  tasks: Task[]
  addTask: (task: Task) => void
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
}

export const useTasksStore = create<TasksState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      updateTask: (updated) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === updated.id ? updated : t
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),
    }),
    {
      name: 'tasks-storage',
    }
  )
)