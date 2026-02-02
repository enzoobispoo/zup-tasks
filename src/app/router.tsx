import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { TaskList } from '../pages/TaskList'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  )
}