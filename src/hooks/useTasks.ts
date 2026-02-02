import { useTasksStore } from '../store/useTasksStore'

export const useTasks = () => {
  return useTasksStore()
}