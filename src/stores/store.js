import { configureStore } from '@reduxjs/toolkit'
import storeTasks from '../features/tasks/storeTasks'

export default configureStore({
  reducer: {
    storetask: storeTasks,
  }
})