import AddTodos from './AddTodo';
import { useAppContainer } from './Context';
import Header from './Header';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useAppContainer();

  return (
    <div className='Todos'>
      <Header />
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
        ))}
      <AddTodos />
    </div>
  );
};
export default Todos;
