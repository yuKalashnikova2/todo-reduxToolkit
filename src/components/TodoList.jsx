/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, handleRemoveTodo, handleToggleTodo }) => {
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
