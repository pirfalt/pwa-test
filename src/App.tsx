import logo from "./checkbox.svg";
import classes from "./App.module.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className={classes["App"]}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <Link to="/">
      <header className={classes["Header"]}>
        <h1>PWA test</h1>
        <img src={logo} className={classes["App-logo"]} alt="logo" />
      </header>
    </Link>
  );
}

function Footer() {
  return (
    <footer className={classes["Footer"]}>
      <Link to="/" className={classes["Footer-item"]}>
        <img src={logo} alt="logo" />
        <span>todo</span>
      </Link>
      <Link to="/sync" className={classes["Footer-item"]}>
        <img src={logo} alt="logo" />
        <span>sync</span>
      </Link>
      <Link to="/about" className={classes["Footer-item"]}>
        <img src={logo} alt="logo" />
        <span>about</span>
      </Link>
    </footer>
  );
}
