import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Go grocery shopping", completed: false },
  { id: 2, title: "Pay the bills", completed: true },
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: list.length + 1,
        title: inputValue,
        completed: false,
      };
      setList([...list, newItem]);
      setInputValue("");
    }
  };

  const handleToggleCompletion = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setList(updatedList);
  };

  const handleClearCompleted = () => {
    const incompleteItems = list.filter((item) => !item.completed);
    setList(incompleteItems);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="add-form">
        <input
          type="text"
          placeholder="Add to the list"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div
            key={item.id}
            className={item.completed ? "completed" : ""}
            onClick={() => handleToggleCompletion(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button className="clear" onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
