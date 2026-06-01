import { useOptimistic } from "react";

export default function Demo() {
  const [likes, addLike] = useOptimistic(0, (state) => state + 1);

  return (
    <>
      <h2>{likes}</h2>

      <button onClick={() => addLike()}>Like</button>
    </>
  );
}
