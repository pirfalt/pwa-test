import Camera from "../components/Camera";

import classes from "./about.module.css";

export default function About() {
  return (
    <div className={classes["About"]}>
      <p>This about page is mainly used as a testing playground.</p>
      <Camera />
    </div>
  );
}
