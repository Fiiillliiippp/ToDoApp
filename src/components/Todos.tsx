import AddTodos from './AddTodo';
import { useAppContainer } from './Context';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useAppContainer();

  return (
    <div className='Todos'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <AddTodos />
    </div>
  );
};
export default Todos;
