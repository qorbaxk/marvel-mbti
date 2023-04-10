import { configureStore } from '@reduxjs/toolkit'
import questionReducer from 'redux/slice/QuestionSlice'

export const store = configureStore({
  reducer: {
    qr : questionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store