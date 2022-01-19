import classes from "./TodoItem.module.css";

export default function TodoItem(props: {
  todoId: string;
  backgroundColor?: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className={classes["text"]}
        name="text"
        type="text"
        placeholder={`Todo item ${props.todoId}...`}
      />
    </form>
  );
}
