import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import type { Task } from '../types/Task'
import { Feedback } from '../components/Feedback'
import { ConfirmModal } from '../components/ConfirmModal'

export function TaskList() {
  const { tasks, deleteTask, updateTask } = useTasks()

  const [editing, setEditing] = useState<Task | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null)

  function handleSave() {
    if (!editing || !editing.title.trim()) return

    updateTask(editing)
    setEditing(null)

    setMessage('Tarefa atualizada com sucesso.')
    setTimeout(() => setMessage(null), 2000)
  }

  function handleConfirmDelete() {
    if (!taskToDelete) return

    deleteTask(taskToDelete.id)
    setTaskToDelete(null)

    setMessage('Tarefa removida com sucesso.')
    setTimeout(() => setMessage(null), 2000)
  }

  return (
    <div className="container">
      <h1>Lista de Tasks</h1>

      {message && <Feedback message={message} type="success" />}

      {!message && tasks.length === 0 && (
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

                <div className="actions-row">
                  <button
                    className="btn"
                    onClick={handleSave}
                    disabled={!editing.title.trim()}
                  >
                    Salvar
                  </button>

                  <button
                    className="btn secondary"
                    onClick={() => setEditing(null)}
                  >
                    Cancelar
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

                <div className="actions-row">
                  <button className="btn" onClick={() => setEditing(task)}>
                    Editar
                  </button>

                  <button
                    className="btn danger"
                    onClick={() => setTaskToDelete(task)}
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

      {taskToDelete && (
        <ConfirmModal
          title="Excluir tarefa"
          description={`Deseja realmente excluir a tarefa "${taskToDelete.title}"?`}
          onCancel={() => setTaskToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  )
}