import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Prosp {
  todos: ListOfTodos
}

export const Todos: React.FC<Prosp> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  )
}
