import { useEffect, useRef, useState } from "react";
import useDevice from "../../hooks/useDevice";
import { createClassName } from "../../util/util";

import classes from "./Camera.module.css";
const c = createClassName(classes);

export default function Camera(props: {
  className?: string;
  selectClassName?: string;
  captureClassName?: string;
  videoClassName?: string;
}) {
  const { devices, activeDeviceIds, setConstraints, stream, error } = useDevice(
    {
      video: { facingMode: "user" },
      audio: false,
    }
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef(document.createElement("canvas"));

  const videoDevices = devices.filter((d) => d.kind == "videoinput");
  const activeDevice = videoDevices.find((d) =>
    activeDeviceIds?.includes(d.deviceId)
  );

  // Connect video src to stream
  useEffect(() => {
    if (stream == null) return;
    if (videoRef.current == null) return;

    videoRef.current.srcObject = stream;
  }, [stream]);

  // Capture video source to canvas
  const [picture, setPicture] = useState<any>();
  const capture = async () => {
    const video = videoRef.current!;

    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    const blob = await canvasToBlob(canvas, "image/png");
    setPicture(URL.createObjectURL(blob));
  };

  // Error
  if (error) {
    return <p>{error?.toString()}</p>;
  }
  // Fallback
  const supported = "mediaDevices" in navigator;
  if (!supported) {
    return (
      <>
        <p>Direct camera usage not supported, using input fallback.</p>
        <input type="file" accept="image/*" capture="environment" />
        <input type="file" accept="image/*" />
      </>
    );
  }

  return (
    <div className={props.className}>
      <video
        ref={videoRef}
        className={props.videoClassName}
        autoPlay
        playsInline={true}
      />
      <select
        className={props.selectClassName}
        value={activeDevice?.deviceId}
        onChange={(e) =>
          setConstraints({
            video: { deviceId: e.target.value },
            audio: false,
          })
        }
      >
        {videoDevices.map((d) => (
          <option key={d.deviceId} value={d.deviceId}>
            {d.label}
          </option>
        ))}
      </select>
      <button className={props.captureClassName} onClick={capture}>
        Capture
      </button>
      <img src={picture} />
    </div>
  );
}
const canvasToBlob = (
  canvas: HTMLCanvasElement,
  type?: string,
  quality?: any
) =>
  new Promise<Blob>((res, rej) =>
    canvas.toBlob(
      (blob) => {
        if (blob == null) return rej(new Error("Empty Blob"));
        res(blob);
      },
      type,
      quality
    )
  );
