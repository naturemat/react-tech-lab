import { useRef, forwardRef, useImperativeHandle } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    clear() {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} />;
});

export default function Demo() {
  const ref = useRef();

  return (
    <>
      <CustomInput ref={ref} />

      <button onClick={() => ref.current.clear()}>Limpiar</button>
    </>
  );
}
