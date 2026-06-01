import { useId } from "react";

export default function Demo() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Nombre</label>

      <input id={id} />
    </>
  );
}
