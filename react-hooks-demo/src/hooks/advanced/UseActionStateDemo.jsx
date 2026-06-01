import { useActionState } from "react";

async function increment(prev) {
  return prev + 1;
}

export default function Demo() {
  const [count, action] = useActionState(increment, 0);

  return (
    <form action={action}>
      <p>{count}</p>

      <button>Increment</button>
    </form>
  );
}
