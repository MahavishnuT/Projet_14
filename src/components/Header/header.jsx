import "./header.scss"
import Logo from "../../assets/wealth-health-logo.jpg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <Link to="/"><h1>Wealth-Health</h1></Link>
      <img src={Logo} alt="wealth-health logo" />
    </header>
  )
}

export default Header