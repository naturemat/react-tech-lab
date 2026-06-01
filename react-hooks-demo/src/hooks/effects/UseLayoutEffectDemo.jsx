import { useRef, useLayoutEffect } from "react";

export default function Demo() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.offsetWidth);
  }, []);

  return <div ref={divRef}>Caja</div>;
}
