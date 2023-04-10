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
    resetCount: state => {
      state.selected = initialState.selected
    },
  },
})

export const { getIndex, plusCount, resetCount } = questionSlice.actions

export default questionSlice.reducer
