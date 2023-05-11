import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { handleAddTodo } from './store/todoSlice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(handleAddTodo({ text }))
    setText('')
  }

  // const handleToggleTodo = () => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo
    //     return { ...todo, completed: !todo.completed }
    //   })
    // )
  // }

  return (
    <div className="main">
      {console.log('render')}
      <h1>Туду лист + редакс</h1>
      <InputField text={text} setText={setText} handleAddTodo={addTask} />
      <TodoList />
    </div>
  )
}

export default App
