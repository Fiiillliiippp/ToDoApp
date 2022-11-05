import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppContainer } from './Context';

const AddTodos = () => {
  
  const { onSubmiting } = useAppContainer();
  const [newTodo, setNewTodo] = useState('');

  const handleChanging = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(newTodo.trim().length !== 0) {
      onSubmiting(newTodo);
    }
    setNewTodo("")
  }


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newTodo} onChange={handleChanging} />
      </form>
    </div>
  );
};
export default AddTodos;
