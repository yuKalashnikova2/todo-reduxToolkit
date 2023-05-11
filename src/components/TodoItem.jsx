
import { useDispatch } from 'react-redux'
import {handleRemoveTodo} from '../store/todoSlice'

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, completed, text, handleToggleTodo }) => {
    const dispatch = useDispatch()
  return (
    <li key={id}>
    <input
      type="checkbox"
      checked={completed}
      onChange={() => handleToggleTodo(id)}
    />
    <span>{text}</span>
      <span className="delete" onClick={() => dispatch(handleRemoveTodo({id}))}>
         &times;
      </span>
  </li>
  )
}

export default TodoItem
