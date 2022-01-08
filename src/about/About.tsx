import { useEffect, useRef, useState } from "react";
import classes from "./About.module.css";

export default function () {
  const supported = "mediaDevices" in navigator;
  if (supported) {
    // Should only do stuff here
  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Video
  useEffect(() => {
    const video = videoRef.current!;
    const constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream;
        return video.play();
      })
      .catch(console.error);
  }, []);

  // Capture video source to canvas
  const capture = () => {
    const canvas = canvasRef.current!;
    const video = videoRef.current!;

    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  return (
    <div className={classes["root"]}>
      <p>About</p>
      <p>para</p>
      <video ref={videoRef} className={classes["video"]} autoPlay />
      <canvas ref={canvasRef} className={classes["canvas"]} />
      <button onClick={capture}>Capture</button>
    </div>
  );
}
