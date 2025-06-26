import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleOnAddTodo(todoText: string) {
    const todo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(todo));
  }

  function handleOnRemoveTodo(todoId: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: handleOnAddTodo,
    removeTodo: handleOnRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
