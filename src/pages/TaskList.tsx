import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import type { Task } from '../types/Task'

export function TaskList() {
  const { tasks, deleteTask, updateTask } = useTasks()
  const [editing, setEditing] = useState<Task | null>(null)

  function handleSave() {
    if (editing) {
      updateTask(editing)
      setEditing(null)
    }
  }

  return (
    <div>
      <h1>Lista de Tasks</h1>

      {tasks.map((task) => (
        <div key={task.id}>
          {editing?.id === task.id ? (
            <>
              <input
                value={editing.title}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.target.value })
                }
              />
              <input
                value={editing.description}
                onChange={(e) =>
                  setEditing({ ...editing, description: e.target.value })
                }
              />
              <button onClick={handleSave}>Salvar</button>
            </>
          ) : (
            <>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
              <button onClick={() => setEditing(task)}>Editar</button>
              <button onClick={() => deleteTask(task.id)}>Apagar</button>
            </>
          )}
        </div>
      ))}

      <Link to="/">Voltar</Link>
    </div>
  )
}