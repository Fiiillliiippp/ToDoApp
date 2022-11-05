import { Link } from "react-router-dom"

const TheNavigation = () => {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/todos" >Todos</Link>
      {/* <Link to="/addtodo" >Add Todo</Link> */}
    </nav>
  )
}
export default TheNavigation