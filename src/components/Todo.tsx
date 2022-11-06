import { useAppContainer } from './Context';

type Props = {
  todo: { id: number; text: string; done: boolean };
};

const Todo = ({ todo }: Props) => {
  const { onDelete } = useAppContainer();
  const { onRemove } = useAppContainer();

  return (
    <div className={`Todo ${todo.done ? 'completed' : ''}`}>
      <p>{todo.text}</p>
      <div onClick={() => onDelete(todo.id)}>
        <i className='fas fa-trash'></i>
      </div>
      <div onClick={() => onRemove(todo.id)}>
        <i className='fas fa-check'></i>
      </div>
    </div>
  );
};
export default Todo;
