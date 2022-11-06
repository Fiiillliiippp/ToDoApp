import Todos from "./Todos"

const TodoSite = () => {
  const handleAddTodos = () => {
    console.log("Add Todo List");
    
  }
  return(
    <div className="TodoSite">
      <button onClick={handleAddTodos}>Add Todo List</button>
      <Todos />
    </div>
  )
}
export default TodoSite