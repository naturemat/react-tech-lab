import { useCallback } from "react";

export default function Demo() {
  const handleClick = useCallback(() => {
    alert("Hola");
  }, []);

  return <button onClick={handleClick}>Click</button>;
}
