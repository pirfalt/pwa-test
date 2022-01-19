import TodoItem from "../../components/TodoItem";
import { useParams } from "react-router";

export default function TodoId() {
  const params = useParams();
  const todoId = params["todo-id"];

  if (todoId == null) return <div>Missing 'todo-id' path parameter.</div>;

  return <TodoItem todoId={todoId} />;
}
