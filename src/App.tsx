import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { createClassName } from "./util/util";
import classes from "./App.module.css";
import Menu from "./components/Menu/Menu";

const c = createClassName(classes);

function App() {
  return (
    <div className={c("background")}>
      <div className={c("root")}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Menu />
      </div>
    </div>
  );
}

export default App;
