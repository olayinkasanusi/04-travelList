import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function onClear() {
    const confirmed = window.confirm(
      "Are you sure you want to clear your item List?"
    );
    if (confirmed) setItems([]);
  }
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(items);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onToggle={handleToggleItem}
        onClear={onClear}
      />
      <Stats items={items} />
    </div>
  );
}
