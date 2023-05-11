/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
const TodoList = ({ removeTodo, toggleTodo }) => {
  const todos = useSelector((store) => store.todos.todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
