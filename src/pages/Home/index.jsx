import './home.scss'
import { states } from '../../data/USStates'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee, showModal } from '../../redux/redux'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/modal'

function Home() {
  const dispatch = useDispatch()
  const selectorEmployee = useSelector((state) => state.employee)
  const selectorModal = useSelector((state) => state.modal)

  function submitEmployee(event) {
    event.preventDefault()

    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const dateOfBirth = document.getElementById('date-of-birth')
    const startDate = document.getElementById('start-date')
    const department = document.getElementById('department')
    const street = document.getElementById('street')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const zipCode = document.getElementById('zip-code')

    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    }
    console.log(employee)

    dispatch(showModal())
    dispatch(addEmployee(employee))

    console.log(selectorEmployee)
  }

  return (
    <section>
      <h2>Create Employee</h2>
      <div className="container">
        <form action="#" id="create-employee" onSubmit={submitEmployee}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="date" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="date" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {states.map((state) => {
                return (
                  <option key={state.abbreviation} value={state.name}>
                    {state.name}
                  </option>
                )
              })}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button type="submit" className='save-button'>Save</button>
        </form>
      </div>
      {selectorModal.isSaved && <Modal />}
      <Link to="/employeesList">View Current Employees</Link>
    </section>
  )
}

export default Home
