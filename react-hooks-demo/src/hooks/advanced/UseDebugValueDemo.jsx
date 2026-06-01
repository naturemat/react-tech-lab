import { useState, useDebugValue } from "react";

function useStatus() {
  const [status] = useState("Online");

  useDebugValue(status);

  return status;
}

export default function Demo() {
  const status = useStatus();

  return <h2>{status}</h2>;
}
