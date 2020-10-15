import React from "react";
import { useLocalStorageState } from "./utils";
import "./styles.css";

function App() {
  const [names, setNames] = useLocalStorageState("names", []);
  const [count, setCount] = useLocalStorageState("count", 0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    const namesCopy = [...names];
    if (namesCopy[namesCopy.length - 1] === newName) {
      /* return for now, proper validation needed */
      return;
    }
    namesCopy.push(newName);
    setNames(namesCopy);
    setCount(namesCopy.length);
    event.target.elements.name.value = "";
  };
  /*
   todo:
    * style whole app & display selected name better than alert
    * investigate entering csv names to populate names array
   */
  const pickName = () => {
    alert(names[Math.floor(Math.random() * names.length)]);
  };

  const reset = () => {
    setCount(0);
    setNames([]);
  };
  /*
  todo:
    * make reusable components
    * get key for the list items
  */
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name: </label>
        <input id="name" />
        <button type="submit" disabled={names.length > 4 ? true : false}>
          +
        </button>
        <p>{count}/5 names added.</p>
      </form>
      <div>
        <button onClick={pickName} disabled={names.length <= 1 ? true : false}>
          pick
        </button>
        <button onClick={reset} disabled={names.length === 0 ? true : false}>
          reset
        </button>
      </div>
      {names && names.map((name) => <li>{name}</li>)}
    </div>
  );
}

export default App;
