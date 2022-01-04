import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import TodoList from "./todo/TodoList";
import TodoItem from "./todo/TodoItem";
import Sync from "./sync/Sync";
import History from "./history/History";
import { init as dbInit } from "./db";

dbInit().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<TodoList />} />
            <Route path="/:todoId" element={<TodoItem />} />
            <Route path="/sync" element={<Sync />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js", {})
    .then((reg) => {
      // registration worked
      // debugger;
      console.log("Registration succeeded. Scope is " + reg.scope);
    })
    .catch((error) => {
      // registration failed
      debugger;
      console.log("Registration failed with " + error);
    });
} else {
  console.error("Wont work!");
}
