import classes from "./Header.module.css";
import { createClassName } from "../../util/util";
import { Link } from "react-router-dom";
import logo from "../../assets/checkbox.svg";

const c = createClassName(classes);

export default function Header(props: {}) {
  return (
    <div className={c("root")}>
      <Link to="/">
        <header className={classes["Header"]}>
          <h1>PWA test</h1>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
        </header>
      </Link>
    </div>
  );
}
