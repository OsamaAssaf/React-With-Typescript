import { FC, useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
