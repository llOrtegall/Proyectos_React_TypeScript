export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>

export type ListOfTodos = Todo[]
