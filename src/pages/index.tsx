import { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import db, { tasksKey } from "../util/db";
import { createClassName } from "../util/util";

import classes from "./index.module.css";

const c = createClassName(classes);

type TodoItem = {
  text: string;
  checked: boolean;
};
export default function TodoList() {
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
  const removeItem = (i: number) => {
    const next = tasks.filter((_v, ti) => ti != i);
    setTasks(next);
  };

  return (
    <ol className={c("Todo-list")}>
      {tasks.map((item, i) => {
        return (
          <li key={i} className={c("Todo-list-item")}>
            <div className={c("Todo-row-box")}>
              <label className={c("Todo-row-label")}>
                <input
                  type="checkbox"
                  className={c("Todo-row-checkbox")}
                  name={`${i}_${item.text}`}
                  checked={item.checked}
                  onChange={() => checkItem(i)}
                />
                {item.text}
              </label>
              <button
                className={c("Todo-row-button")}
                onClick={(e) => {
                  e.preventDefault();
                  removeItem(i);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })}
      <InputRow addItem={addItem} />
    </ol>
  );
}

function InputRow(props: { addItem: (item: TodoItem) => void }) {
  return (
    <li className={c("Todo-list-item")}>
      <form
        className={c("Todo-input-box")}
        onSubmit={(e) => {
          e.preventDefault();

          const data = new FormData(e.currentTarget);
          const newItem = data.get("new-item");
          if (newItem == null) return;
          if (newItem instanceof File) return;

          props.addItem({
            text: newItem,
            checked: false,
          });

          e.currentTarget.reset();
        }}
      >
        <input
          className={c("Todo-input-text")}
          name="new-item"
          type="text"
          placeholder="New todo item..."
        />
        <button type="submit" className={c("Todo-input-button")}>
          Add
        </button>
      </form>
    </li>
  );
}
