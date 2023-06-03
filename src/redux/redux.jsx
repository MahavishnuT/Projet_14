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

export const { addEmployee } = employeeSlice.actions

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
})
