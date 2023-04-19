import { createSlice } from '@reduxjs/toolkit'

export const storeTasks = createSlice({
  name: 'storetask',
  initialState: {
    tasks: [],
    status: ''
  },
  reducers: {
    loadTasks: (state, v) => {
      state.tasks = v.payload
    },
    filterTasks: (state, v) => {
      state.tasks = v.payload
    }
  },  
})

// Action creators are generated for each case reducer function
export const { loadTasks, filterTasks } = storeTasks.actions

export default storeTasks.reducer