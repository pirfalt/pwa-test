import classes from "./TodoList.module.css";
import { useParams } from "react-router";

export default function TodoItem() {
  const params = useParams();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className={classes["TodoItem-text"]}
        name="text"
        type="text"
        placeholder={`Todo item ${params.todoId}...`}
      />
    </form>
  );
}
