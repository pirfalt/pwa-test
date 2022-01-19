import classes from "./todo-item.module.css";

export default function TodoItem(props: { todoId: string }) {
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
