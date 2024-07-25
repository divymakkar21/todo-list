export type ITodo = {
  id: number
  title: string
  description?: string
}

export type ITodoItem = {
  title: string
  description?: string
}

export type EditTodoProps = {
  id: number
  updatedTask: ITodoItem
}

export type TodoFormProps = {
  addTask: (task: ITodoItem) => void
}

export type TodoListProps = {
  todos: ITodo[],
  removeTodo: (id: number) => void
  editTodo: (id: number, task: ITodoItem) => void
}


export type TodoListItemProps = {
  task: ITodo,
  removeTodo: (id: number) => void
  editTodo: (id: number, task: ITodoItem) => void
}