export const enum IPriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'

}
export type ITodo = {
  id: number
  title: string
  description?: string
  priority: IPriority
  completed?: boolean
}

export type ITodoItem = {
  title: string
  description?: string
  priority: IPriority
  completed?: boolean
}

export interface TodoFormFieldsProps {
  todo: ITodoItem,
  handleChange: (attr: string, value: IPriority) => void,
  handleSubmit: (e: React.FormEvent) => void,
  isEditing?: boolean,
  setIsEditing?: (value: boolean) => void
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

export type TaskDetailsProps = {
  todo: ITodoItem,
  onEdit: () => void,
  onRemove: () => void
  onComplete: () => void
}

export type PriorityTagProps = {
  priority: IPriority;
}