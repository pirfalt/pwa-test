import classes from "./Menu.module.css";
import { createClassName } from "../../util/util";
import { Link } from "react-router-dom";
import logo from "../../assets/checkbox.svg";

const c = createClassName(classes);

export default function Menu(props: {}) {
  return (
    <nav className={c("root")}>
      <Link to="/" className={c("item")}>
        <img src={logo} alt="logo" />
        <span>todo</span>
      </Link>
      <Link to="/sync" className={c("item")}>
        <img src={logo} alt="logo" />
        <span>sync</span>
      </Link>
      <Link to="/about" className={c("item")}>
        <img src={logo} alt="logo" />
        <span>about</span>
      </Link>
      <Link to="/camera" className={c("item")}>
        <img src={logo} alt="logo" />
        <span>camera</span>
      </Link>
    </nav>
  );
}
