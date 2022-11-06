import { Link } from 'react-router-dom';
import { useAppContainer } from './Context';

const Home = () => {
  const { todos } = useAppContainer();
  return (
    <div className='Home'>
      <h2>Welcome back</h2>
      <div className='HomeTodos'>
        Your unfinished To Dos:
        {todos.map(todo => {
          if (todo.done === false) {
            return (
            <div key={todo.id} >
              {todo.text} <Link to="/todos"><i className='fa fa-search'></i></Link>
            </div>)
          }
        })}
      </div>
    </div>
  );
};
export default Home;
