import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import TodoList from "./todo/TodoList";
import { init as dbInit } from "./db";

dbInit().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<TodoList />} />
            <Route path="/sync" element={<div>sync</div>} />
            <Route path="/history" element={<div>history</div>} />
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
