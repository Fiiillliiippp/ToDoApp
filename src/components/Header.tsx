import { ChangeEvent, FormEvent, useState } from "react";
import Todo from "./Todo";

const Header = () => {
  const [header, setHeader] = useState("Header")
  const [newHeader, setNewHeader] = useState("")
  const [editI, setEditI] = useState(false)
  const handleEdit = () => {
    setEditI(!editI)
  }
  const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHeader(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(newHeader.trim().length !== 0) {
      setHeader(newHeader)
    }
    setNewHeader("")
    setEditI(false)
  }
  return (
    <div className="Header">
      <div className="HeaderText">
      <h3>{header}</h3>
      <i className='fas fa-edit' onClick={handleEdit}></i>
      </div>
      <form onSubmit={handleSubmit} className={`${editI ? "show" : "hide"}`}>
        <input value={newHeader} onChange={handleHeaderChange} className={`${editI ? "show" : "hide"}`}/>
      </form>
    </div>
  );
};
export default Header;
