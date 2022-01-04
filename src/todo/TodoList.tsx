import { useEffect, useState } from "react";
import classes from "./TodoList.module.css";
import db, { tasksKey } from "../db";

export default function TodoList() {
  type TodoItem = {
    text: string;
    checked: boolean;
  };
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  useEffect(() => {
    db.getItem<TodoItem[]>(tasksKey)
      .then((dbTasks) => setTasks(dbTasks ?? []))
      .catch((err) => console.error("failed to load!", err));
  }, []);
  useEffect(() => {
    db.setItem(tasksKey, tasks).catch((err) =>
      console.error("failed to save!", err)
    );
  }, [tasks]);

  const checkItem = (i: number) => {
    const next = [...tasks];
    next[i].checked = !next[i].checked;
    setTasks(next);
  };

  const addItem = (item: TodoItem) => {
    const next = [...tasks, item];
    setTasks(next);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const selectorQuery = `.${classes["Todo-input"]}`;
        const itemInputElement = e.currentTarget.querySelector(selectorQuery);
        if (itemInputElement != null) {
          const inputElement = itemInputElement as any;

          const newText = inputElement.value;
          inputElement.value = "";
          addItem({
            text: newText,
            checked: false,
          });
        }
      }}
    >
      <ol className={classes["Todo-list"]}>
        {tasks.map((item, i) => {
          return (
            <li key={i} className={classes["Todo-item"]}>
              <label className={classes["Todo-row"]}>
                <input
                  type="checkbox"
                  name={`${i}_${item.text}`}
                  checked={item.checked}
                  onChange={() => checkItem(i)}
                />
                {item.text}
              </label>
            </li>
          );
        })}
        <li className={classes["Todo-item"]}>
          <input
            className={classes["Todo-input"]}
            name="new-item"
            type="text"
            placeholder="New todo item..."
          />
        </li>
      </ol>
    </form>
  );
}
