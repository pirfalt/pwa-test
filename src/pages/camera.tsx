import { useHref, useLinkClickHandler, useNavigate } from "react-router-dom";
import Camera from "../components/Camera/Camera";
import { createClassName } from "../util/util";

import classes from "./camera.module.css";
const c = createClassName(classes);

export default function CameraPage() {
  const nav = useNavigate();
  return (
    <div className={c("root")}>
      <Camera
        className={c("camera")}
        selectClassName={c("select")}
        captureClassName={c("capture")}
        videoClassName={c("video")}
      />
      <button className={c("back")} onClick={() => nav("/")}>
        Back
      </button>
    </div>
  );
}
