import { PageTitle } from "@repo/ui";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <main className="app">
      <PageTitle>Testing Showcase - Counter</PageTitle>
      <Counter />
    </main>
  );
}
