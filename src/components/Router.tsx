import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import TodoSite from "./TodoSite"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todos" element={<TodoSite />}/>
        {/* <Route path="/addtodo" element={<AddTodos />} /> */}
      </Routes>
    </div>
  )
}
export default Router