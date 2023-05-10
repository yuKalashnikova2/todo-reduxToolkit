

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, completed, text, handleRemoveTodo, handleToggleTodo }) => {
  return (
    <li key={id}>
    <input
      type="checkbox"
      checked={completed}
      onChange={() => handleToggleTodo(id)}
    />
    <span>{text}</span>
      <span className="delete" onClick={() => handleRemoveTodo(id)}>
         &times;
      </span>
  </li>
  )
}

export default TodoItem
