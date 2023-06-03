import { createSlice, configureStore } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { isSaved : false },
  reducers: {
    showModal: (state) => {
      state.isSaved = !state.isSaved
    },
  },
})



export const { addEmployee } = employeeSlice.actions
export const { showModal } = modalSlice.actions

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
    modal: modalSlice.reducer,
  },
})
