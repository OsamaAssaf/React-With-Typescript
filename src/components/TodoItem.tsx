import { FC } from "react";
import styles from "./TodoItem.module.css";

type Props = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoItem: FC<Props> = (props) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
