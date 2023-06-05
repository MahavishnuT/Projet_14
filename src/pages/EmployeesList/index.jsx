import EmployeesTable from '../../components/EmployeesTable'
import { Link } from 'react-router-dom'

function EmployeesList() {
  return (
    <section>
      <EmployeesTable />
      <Link to="/">Home</Link>
    </section>
  )
}

export default EmployeesList
