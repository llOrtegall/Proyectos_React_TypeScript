import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Prosp {
  todos: ListOfTodos
  onToggle: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemove: ({ id }: TodoId) => void
}

export const Todos: React.FC<Prosp> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleteTodo={onToggle}
            onRemoveTodo={onRemove}
          />
        </li>
      ))}
    </ul>
  )
}
