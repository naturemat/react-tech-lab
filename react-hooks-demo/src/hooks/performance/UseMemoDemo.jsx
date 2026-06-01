import { useMemo, useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);

  const random = useMemo(() => {
    return Math.random();
  }, []);

  return (
    <>
      <p>{random}</p>

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}
