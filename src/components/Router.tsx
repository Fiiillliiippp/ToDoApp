import { Route, Routes } from "react-router-dom"
import AddTodos from "./AddTodo"
import Home from "./Home"
import Todos from "./Todos"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todos" element={<Todos />}/>
        {/* <Route path="/addtodo" element={<AddTodos />} /> */}
      </Routes>
    </div>
  )
}
export default Router