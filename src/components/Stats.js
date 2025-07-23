export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start adding some items</p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100.0
        ? `You have ${numItems} items on your list, and you already packed ${numPacked} 
      items.That is ${percentage}% of the items.`
        : `You've packed everything! ✈️`}
    </footer>
  );
}
