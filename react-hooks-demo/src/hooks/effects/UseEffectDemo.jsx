import { useState, useEffect } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
