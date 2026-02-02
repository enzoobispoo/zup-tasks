import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import type { Task } from '../types/Task'
import { Feedback } from '../components/Feedback'

export function TaskList() {
  const { tasks, deleteTask, updateTask } = useTasks()
  const [editing, setEditing] = useState<Task | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [showEmpty, setShowEmpty] = useState(true)

  function handleSave() {
    if (editing) {
      updateTask(editing)
      setEditing(null)
    }
  }

  function handleDelete(id: string) {
    deleteTask(id)
    setMessage('Tarefa removida com sucesso.')
    setShowEmpty(false)

    setTimeout(() => {
      setMessage(null)
      setShowEmpty(true)
    }, 2000)
  }

  return (
    <div className="container">
      <h1>Lista de Tasks</h1>

      {message && <Feedback message={message} />} 

      {tasks.length === 0 && showEmpty && !message && (
        <Feedback message="Nenhuma tarefa criada ainda." type="info" />
      )}

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            {editing?.id === task.id ? (
              <>
                <input
                  className="input"
                  value={editing.title}
                  onChange={(e) =>
                    setEditing({ ...editing, title: e.target.value })
                  }
                />
                <textarea
                  className="input textarea"
                  value={editing.description}
                  onChange={(e) =>
                    setEditing({ ...editing, description: e.target.value })
                  }
                  rows={3}
                />
                <div className="task-actions">
                  <button className="btn" onClick={handleSave}>
                    Salvar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="task-view">
                  <p>
                    <strong>Título:</strong> {task.title}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {task.description}
                  </p>
                </div>

                <div className="task-actions">
                  <button className="btn" onClick={() => setEditing(task)}>
                    Editar
                  </button>
                  <button
                    className="btn danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    Apagar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <Link to="/" className="btn secondary">
        Voltar
      </Link>
    </div>
  )
}