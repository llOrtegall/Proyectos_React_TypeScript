import { Todos } from './components/Todos'
import { useState } from 'react'

const mockTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Learn Node.js',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onRemove={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App
