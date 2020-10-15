import React from "react";
import { useLocalStorageState } from "./utils";
import "./styles.css";

function App() {
  const [names, setNames] = useLocalStorageState("names", []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const namesCopy = [...names];
    namesCopy.push(event.target.elements.name.value);
    setNames(namesCopy);
  };
  const pickName = () => {
    alert(names[Math.floor(Math.random() * names.length)]);
  };
  console.log(window.localStorage);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name: </label>
        <input id="name" />
        <button type="submit">+</button>
      </form>
      <div>
        <button onClick={pickName}>pick</button>
        <button onClick={() => setNames([])}>reset</button>
      </div>
      {names && names.map((name) => <li>{name}</li>)}
    </div>
  );
}

export default App;
