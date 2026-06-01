import { useMemo, useState } from "react";

import Menu from "./components/Menu";

const demos = import.meta.glob("./hooks/**/*.jsx", { eager: true });

const demoItems = Object.entries(demos)
  .map(([path, module]) => {
    const fileName = path.split("/").pop();
    const id = fileName.replace(/\.jsx$/, "");
    const label = id.replace(/Demo$/, "");
    return { id, label, Component: module.default };
  })
  .sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
  );

function App() {
  const [selected, setSelected] = useState(demoItems[0]?.id || null);

  const selectedItem = useMemo(
    () => demoItems.find((item) => item.id === selected),
    [selected],
  );

  return (
    <>
      <Menu items={demoItems} selected={selected} setSelected={setSelected} />

      <hr />

      {selectedItem ? <selectedItem.Component /> : <h2>Selecciona un Hook</h2>}
    </>
  );
}

export default App;
