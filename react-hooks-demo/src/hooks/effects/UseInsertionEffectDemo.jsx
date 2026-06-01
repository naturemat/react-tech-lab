import { useInsertionEffect } from "react";

export default function Demo() {
  useInsertionEffect(() => {
    const style = document.createElement("style");

    style.textContent = "body { background: lightblue; }";

    document.head.appendChild(style);

    return () => style.remove();
  }, []);

  return <h2>useInsertionEffect</h2>;
}
