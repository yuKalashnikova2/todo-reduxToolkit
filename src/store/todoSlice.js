import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },

    toggleTodo(state, action) {
      const toggle = state.todos.find((todo) => todo.id === action.payload.id)
      toggle.completed = !toggle.completed
    },
  },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
