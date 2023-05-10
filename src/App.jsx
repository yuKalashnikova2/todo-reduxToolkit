import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { handleAddTodo } from './store/todoSlice'

function App() {

  const [text, setText] = useState('')


  const handleRemoveTodo = () => {
    // setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const handleToggleTodo = () => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo
    //     return { ...todo, completed: !todo.completed }
    //   })
    // )
  }

  return (
    <div className="main">
      <h1>Туду лист + редакс</h1>
      <InputField text={text} setText={setText} handleAddTodo={handleAddTodo} />
      <TodoList
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </div>
  )
}

export default App
