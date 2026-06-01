import { useState, useTransition } from "react";

export default function Demo() {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <input
        onChange={(e) => {
          startTransition(() => {
            setText(e.target.value);
          });
        }}
      />

      {isPending && <p>Cargando...</p>}

      <p>{text}</p>
    </>
  );
}
