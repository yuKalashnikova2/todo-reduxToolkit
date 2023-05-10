import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'

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
      <InputField text={text} setText={setText} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </div>
  )
}

export default App
