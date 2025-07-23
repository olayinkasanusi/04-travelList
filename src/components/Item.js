export default function Item({ item, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToggle(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
