//import styles from "./TravelList.module.css";

//import Logo from "./Logo";
// import Form from "./Form";
// import PackingList from "./PackingList";
// import Stats from "./Stats";
import { useState } from "react";
import styles from "./ExcerciseTravelList/TravelList.module.css";
import Logo from "./ExcerciseTravelList/Logo";
import Form from "./ExcerciseTravelList/Form";
import PackingList from "./ExcerciseTravelList/PackingList";
import Stats from "./ExcerciseTravelList/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((items) => items.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className={styles.travelPage}>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};
// const Logo = () => {
//   return <h1>🌴Far Away🧳</h1>;
// };
// const Form = ({ onAddItems }) => {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!description) return;
//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     console.log(newItem);
//     onAddItems(newItem);
//     setDescription("");
//     setQuantity(1);
//   };

//   return (
//     <form className={styles.addForm} onSubmit={handleSubmit}>
//       <h3>What do you need for your 😍 trip</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// };
// const PackingList = ({ items, onDeleteItem, onToggleItems, onClearList }) => {
//   const [sortBy, setSortBy] = useState("input");
//   let sortedItems;
//   if (sortBy === "input") sortedItems = items;
//   if (sortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));
//   if (sortBy === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));
//   return (
//     <div className={styles.list}>
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onDeleteItem={onDeleteItem}
//             onToggleItems={onToggleItems}
//           />
//         ))}
//       </ul>
//       <div className={styles.actions}>
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input"> Sort by input order</option>
//           <option value="description"> Sort by description </option>
//           <option value="packed"> Sort by packed status </option>
//         </select>
//         <button onClick={() => onClearList()}>Clear list</button>
//       </div>
//     </div>
//   );
// };
// const Item = ({ item, onDeleteItem, onToggleItems }) => {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItems(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// };

// const Stats = ({ items }) => {
//   if (!items.length)
//     return (
//       <p className={styles.stats}>
//         <em>Start adding some items to your pakcing list 🚀</em>
//       </p>
//     );
//   const numItems = items.length;
//   const numPacked = items.filter((item) => item.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);
//   return (
//     <footer className={styles.stats}>
//       <em>
//         {percentage === 100
//           ? "You got everything! Ready to go✈️"
//           : ` You have ${numItems} items on your list, and you already packed ${numPacked}(${percentage}%)`}
//       </em>
//     </footer>
//   );
// };

export default App;
