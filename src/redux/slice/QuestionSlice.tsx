import { createSlice } from '@reduxjs/toolkit'

export interface QueState {
  questionIndex: number
  selected: number[]
}

const initialState: QueState = {
  questionIndex: 0,
  selected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getIndex: (state, action) => {
      state.questionIndex = action.payload
    },
    plusCount: (state, action) => {
      state.selected[action.payload] += 1
    },
  },
})

export const { getIndex, plusCount } = questionSlice.actions

export default questionSlice.reducer
