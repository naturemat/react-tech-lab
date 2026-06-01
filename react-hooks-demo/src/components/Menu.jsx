export default function Menu({ items, selected, setSelected }) {
  return (
    <div>
      <h2>React Hooks 19</h2>

      {items.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setSelected(id)}
          style={{ fontWeight: selected === id ? "bold" : "normal" }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
