import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../store/todoSlice'

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch()
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  )
}

export default TodoItem
