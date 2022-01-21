import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Index from "./pages/index";
import About from "./pages/about";
import Sync from "./pages/sync";
import TodoItem from "./pages/todo/[todo-id]";
import CameraPage from "./pages/camera";
import { init as dbInit } from "./util/db";

import "./index.css";
import "./base.css";

dbInit().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Index />} />
            <Route path="/sync" element={<Sync />} />
            <Route path="/todo/:todo-id" element={<TodoItem />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/camera" element={<CameraPage />} />
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
