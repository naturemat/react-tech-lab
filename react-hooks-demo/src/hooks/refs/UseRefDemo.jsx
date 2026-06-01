import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />

      <button onClick={() => inputRef.current.focus()}>Enfocar</button>
    </>
  );
}
