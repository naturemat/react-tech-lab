import { useCallback } from "react";

export default function Demo() {
  const handleClick = useCallback(() => {
    alert("Hello");
  }, []);

  return <button onClick={handleClick}>Click</button>;
}
