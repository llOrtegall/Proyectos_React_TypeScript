import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'
import { useState } from 'react'

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn Node.js',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
  <div className='todoapp'>
    <Todos
      onToggle={handleComplete}
      onRemove={handleRemove}
      todos={todos}
    />
  </div>
  )
}
export default App
