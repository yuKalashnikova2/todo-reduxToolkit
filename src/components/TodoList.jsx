/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
const TodoList = ({  handleRemoveTodo, handleToggleTodo }) => {
  const todos = useSelector(store => store.todos.todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
