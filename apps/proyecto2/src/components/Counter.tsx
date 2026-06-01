import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section className="counter" aria-label="Contador">
      <p className="counter__value" data-testid="counter-value">
        {count}
      </p>
      <button
        type="button"
        className="counter__button"
        data-testid="counter-increment"
        onClick={increment}
      >
        Incrementar
      </button>
    </section>
  );
}
