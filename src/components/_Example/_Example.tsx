import classes from "./_Example.module.css";
import { createClassName } from "../../util/util";

const c = createClassName(classes);

export default function _Example(props: { value: string }) {
  return <div className={c("root")}>{props.value}</div>;
}
