import { createSlice } from '@reduxjs/toolkit'

export interface QueState {
  questionIndex: number
}

const initialState: QueState = {
  questionIndex: 0,
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getIndex: (state, action) => {
      state.questionIndex = action.payload
    },
  },
})

export const { getIndex } = questionSlice.actions

export default questionSlice.reducer
