import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import { createTask } from '../services/taskService'

export function Home() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim()) return

    const task = createTask(title, description)
    addTask(task)

    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <h1>Nova Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <Link to="/tasks">Ver tasks</Link>
    </div>
  )
}