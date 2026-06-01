import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
