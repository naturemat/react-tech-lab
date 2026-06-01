import { useSyncExternalStore } from "react";

function subscribe(callback) {
  const interval = setInterval(callback, 1000);

  return () => clearInterval(interval);
}

function getSnapshot() {
  return new Date().toLocaleTimeString();
}

export default function Demo() {
  const time = useSyncExternalStore(subscribe, getSnapshot);

  return <h2>{time}</h2>;
}
