import { useState, useDeferredValue } from "react";

export default function Demo() {
  const [text, setText] = useState("");

  const deferred = useDeferredValue(text);

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />

      <p>{deferred}</p>
    </>
  );
}
