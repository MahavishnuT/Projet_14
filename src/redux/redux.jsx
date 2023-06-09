import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import MOCKED_DATA from "../data/MOCK_DATA.json"


export const employeeSlice = createSlice({
  name: 'employee',
  initialState: MOCKED_DATA, 
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { isSaved: false },
  reducers: {
    showModal: (state) => {
      state.isSaved = !state.isSaved
    },
  },
})

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  employee: employeeSlice.reducer,
  modal: modalSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const { addEmployee } = employeeSlice.actions
export const { showModal } = modalSlice.actions

export const store = configureStore({
  reducer: persistedReducer
})
