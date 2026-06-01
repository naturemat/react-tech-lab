import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Contador: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
