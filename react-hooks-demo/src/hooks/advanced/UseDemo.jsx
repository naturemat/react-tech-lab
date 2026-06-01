import { use } from "react";

const userPromise = Promise.resolve({
  name: "Franco",
});

export default function Demo() {
  const user = use(userPromise);

  return <h2>{user.name}</h2>;
}
