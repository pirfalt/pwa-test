import { useHref, useLinkClickHandler, useNavigate } from "react-router-dom";
import Camera from "../components/Camera/Camera";
import db from "../util/db";
import { createClassName } from "../util/util";

import classes from "./camera.module.css";
const c = createClassName(classes);

export default function CameraPage() {
  const nav = useNavigate();
  const save = (blob: Blob) => {
    db.setItem(`picture-${Math.floor(Math.random() * 10000)}`, blob);
  };
  return (
    <div className={c("root")}>
      <Camera
        className={c("camera")}
        selectClassName={c("select")}
        captureClassName={c("capture")}
        videoClassName={c("video")}
        onCapture={save}
      />
      <button className={c("back")} onClick={() => nav("/")}>
        Back
      </button>
    </div>
  );
}
