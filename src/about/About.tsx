import { useEffect, useRef } from "react";
import useDevice from "../hooks/useDevice";
import classes from "./About.module.css";

export default function () {
  return (
    <div className={classes["root"]}>
      <p>About</p>
      <Camera />
    </div>
  );
}

function Camera() {
  const { devices, activeDeviceIds, setConstraints, stream, error } =
    useDevice();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
  const capture = () => {
    const canvas = canvasRef.current!;
    const video = videoRef.current!;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
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
    <>
      <select
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
      <video
        ref={videoRef}
        className={classes["video"]}
        autoPlay
        playsInline={true}
      />
      <canvas ref={canvasRef} className={classes["canvas"]} />
      <button onClick={capture}>Capture</button>
    </>
  );
}
