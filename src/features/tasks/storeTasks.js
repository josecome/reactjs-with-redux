import { createSlice } from '@reduxjs/toolkit'

export const storeTasks = createSlice({
  name: 'storetask',
  initialState: {
    tasks: [],
    status: '',
  },
  reducers: {
    addNewTask: (state, v) => {
      state.tasks = v
    },
    updateStatus: (state) => {
      state.status = "Completed"
    },
    totalTasks: (state) => {
      return state.tasks.length  
    },
  },  
})

// Action creators are generated for each case reducer function
export const { tasks, totalTasks, status } = storeTasks.actions

export default storeTasks.reducer