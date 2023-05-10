import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      },
    ])
    setText('')
  }

  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const handleToggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo
        return { ...todo, completed: !todo.completed }
      })
    )
  }

  return (
    <div className="main">
      <h1>Туду лист + редакс</h1>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddTodo}> Add todo</button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <span className="delete" onClick={() => handleRemoveTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
