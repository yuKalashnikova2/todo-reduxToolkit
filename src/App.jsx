import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { addTodo } from './store/todoSlice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <div className="main">
      <h1>Туду лист + редакс</h1>
      <InputField text={text} setText={setText} addTodo={addTask} />
      <TodoList />
    </div>
  )
}

export default App
