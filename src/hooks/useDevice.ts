import { useEffect, useState, useRef } from "react";

export default function useDevice(
  initConstraint: MediaStreamConstraints = {
    video: { facingMode: "environment" },
    audio: false,
  }
) {
  const { devices, error: deviceListError } = useDeviceList();
  const {
    setConstraints,
    stream,
    error: streamError,
  } = useMediaStream(initConstraint);

  const activeDeviceIds = stream
    ?.getTracks()
    .map((t) => t.getSettings().deviceId);
  return {
    devices,
    activeDeviceIds,
    setConstraints,
    stream,
    error: deviceListError ?? streamError,
    deviceListError,
    streamError,
  };
}

function useDeviceList() {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    // Support check
    const supported = "mediaDevices" in navigator;
    if (!supported) {
      setError(new Error("DeviceList not supported"));
      return;
    }

    // Setter
    const setDeviceList = () => {
      navigator.mediaDevices
        .enumerateDevices()
        .then(setDevices)
        .catch(setError);
    };

    // Initial state
    setDeviceList();

    // Update state on change
    navigator.mediaDevices.addEventListener("devicechange", setDeviceList);

    return () => {
      // Cleanup
      navigator.mediaDevices.removeEventListener("devicechange", setDeviceList);
    };
  }, []);

  return { devices, error };
}

function useMediaStream(
  initConstraint: MediaStreamConstraints = {
    video: true,
    audio: false,
  }
) {
  const [constraints, setConstraints] =
    useState<MediaStreamConstraints>(initConstraint);
  const [stream, setStream] = useState<MediaStream>(); // Nice external api
  const [error, setError] = useState<Error>();
  const streamRef = useRef<MediaStream>(); // Required for cleanup

  const updateStream = (stream: MediaStream) => {
    streamRef.current = stream;
    setStream(stream);
  };

  useEffect(() => {
    // Support check
    const supported = "mediaDevices" in navigator;
    if (!supported) {
      setError(new Error("VideoStream not supported"));
      return;
    }

    // Update stream
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(updateStream)
      .catch(setError);

    return () => {
      // Stop all current streams
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [constraints]);

  return {
    setConstraints,
    stream,
    error,
  };
}
