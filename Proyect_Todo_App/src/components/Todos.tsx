import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Prosp {
  todos: ListOfTodos
  onRemove: (id: number) => void
}

export const Todos: React.FC<Prosp> = ({ todos, onRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemove}
          />
        </li>
      ))}
    </ul>
  )
}
