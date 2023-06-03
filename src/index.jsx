import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import EmployeesList from './pages/EmployeesList'
import { store } from './redux/redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeesList" element={<EmployeesList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
