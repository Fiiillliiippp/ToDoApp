import { Provider } from './Context';
import { useState } from 'react';

export type AppState = {
  todos: {id: number, text: string, done: boolean}[];
  onSubmiting: (data: string) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [todos, setTodos] = useState( [{id: 1, text: "navigator", done: false}, {id: 2, text: "navigator2", done: false }] )

  const handleAddTodo = (data: string) => {
    setTodos(prevTodos => {
      return [
        ...prevTodos, { id: prevTodos.length + 1, text: data, done: false }
      ]
    })
  }
  const appState: AppState = {
    todos,
    onSubmiting: handleAddTodo,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
