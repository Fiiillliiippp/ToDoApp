type Props = {
  todo: {id: number, text: string, done: boolean}
}

const Todo = ({ todo }: Props) => {

  return (
    <div>
    <ul>
      <li>{todo.text}</li>
    </ul>
    </div>
  );
};
export default Todo;
