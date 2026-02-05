import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import { createTask } from '../services/taskService'
import { Feedback } from '../components/Feedback'

export function Home() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!title.trim()) return

    addTask(createTask(title, description))
    setTitle('')
    setDescription('')

    setMessage('Tarefa criada com sucesso.')
    setTimeout(() => setMessage(null), 2000)
  }

  return (
    <div className="container">
      <h1>Nova Task</h1>

      {message && <Feedback message={message} type="success" />}

      <form onSubmit={handleSubmit} className="task-card">
        <input
          className="input"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="input textarea"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        <div className="actions-row">
          <button
            className="btn"
            type="submit"
            disabled={!title.trim()}
          >
            Criar task
          </button>

          <Link to="/tasks" className="btn secondary">
            Ver tasks
          </Link>
        </div>
      </form>
    </div>
  )
}