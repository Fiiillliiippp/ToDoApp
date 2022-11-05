import { Link } from "react-router-dom"

const TheNavigation = () => {
  return (
    <nav className="TheNavigation">
      <Link className="TheNavLink" to="/" >Home</Link>
      <Link className="TheNavLink" to="/todos" >Todos</Link>
      {/* <Link to="/addtodo" >Add Todo</Link> */}
    </nav>
  )
}
export default TheNavigation