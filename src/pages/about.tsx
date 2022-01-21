import Camera from "../components/Camera/Camera";
import { createClassName } from "../util/util";

import classes from "./about.module.css";
const c = createClassName(classes);

export default function About() {
  return (
    <div className={c("root")}>
      <p>This about page is mainly used as a testing playground.</p>
      <Camera />
    </div>
  );
}
