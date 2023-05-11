import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: { todos: [] },
  reducers: {
    handleAddTodo(state, action) {
      console.log(state)
      console.log(action)

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },

    handleRemoveTodo(state, action) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },

    handleToggleTodo() {},
  },
})

export const { handleAddTodo,  handleRemoveTodo, handleToggleTodo } = todoSlice.actions
export default todoSlice.reducer
