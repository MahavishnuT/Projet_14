import "./home.scss"
import { states } from "../../data/USStates"

function Home() {
  function submitEmployee(event) {
    event.preventDefault()
    const birthdate = document.querySelector("#date-of-birth")
    const department = document.querySelector("#department")
    console.log(typeof birthdate.value, typeof department.value)

  }
  return (
    <section>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
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
              {
                states.map((state) => {
                  return (
                    <option
                          key={state.abbreviation}
                          value={state.name}
                        >
                          {state.name}
                        </option>
                  )
                })
              }
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
        <button type="submit">Save</button>
        </form>

      </div>
    </section>
  )
}

export default Home
