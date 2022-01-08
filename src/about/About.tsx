import { useEffect, useRef, useState } from "react";
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
  const supported = "mediaDevices" in navigator;

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>();

  // Device list
  useEffect(() => {
    if (!supported) return;

    const setVideoDeviceList = () => {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => devices.filter((d) => d.kind == "videoinput"))
        .then(setDevices)
        .catch(console.error);
    };

    // Initial state
    setVideoDeviceList();

    // On change
    navigator.mediaDevices.addEventListener("devicechange", setVideoDeviceList);
    return () => {
      navigator.mediaDevices.removeEventListener(
        "devicechange",
        setVideoDeviceList
      );
    };
  }, []);

  // Video
  useEffect(() => {
    if (!supported) return;

    const video = videoRef.current!;
    navigator.mediaDevices
      .getUserMedia({
        video: { deviceId: selectedDeviceId },
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch(console.error);
  }, [selectedDeviceId]);

  // Capture video source to canvas
  const capture = () => {
    const canvas = canvasRef.current!;
    const video = videoRef.current!;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    console.debug({ canvas, video });
    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  if (!supported) {
    return (
      <>
        <p>Direct camera usage not supported, using input fallback.</p>
        <input type="file" accept="image/*" />
      </>
    );
  }

  return (
    <>
      <select onChange={(e) => setSelectedDeviceId(e.target.value)}>
        {devices.map((d) => (
          <option key={d.deviceId} value={d.deviceId}>
            {d.label}
          </option>
        ))}
      </select>
      <video ref={videoRef} className={classes["video"]} autoPlay />
      <canvas ref={canvasRef} className={classes["canvas"]} />
      <button onClick={capture}>Capture</button>
    </>
  );
}
