import React from "react";
import { useLocalStorageState } from "./utils";
import "./styles.css";

function App() {
  const [people, setNames] = useLocalStorageState("people", []);
  const [count, setCount] = useLocalStorageState("count", 0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    const peopleCopy = [...people];
    if (peopleCopy[peopleCopy.length - 1] === newName) {
      /* return for now, proper validation needed */
      return;
    }
    // namesCopy.push(newName);
    peopleCopy.push({ id: people.length, name: newName });
    setNames(peopleCopy);
    event.target.elements.name.value = "";
  };
  /*
   todo:
    * style whole app & display selected name better than alert
    * investigate entering csv names to populate names array
   */
  const pickName = () => {
    alert(people[Math.floor(Math.random() * people.length)].name);
  };

  const reset = () => {
    setCount(0);
    setNames([]);
  };
  /*
  todo:
    * make reusable components
  */
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name: </label>
        <input id="name" />
        <button type="submit" disabled={people.length > 4 ? true : false}>
          +
        </button>
        <p>{count}/5 people added.</p>
      </form>
      <div>
        <button onClick={pickName} disabled={people.length <= 1 ? true : false}>
          pick
        </button>
        <button onClick={reset} disabled={people.length === 0 ? true : false}>
          reset
        </button>
      </div>
      {people && people.map(({ id, name }) => <li key={id}>{name}</li>)}
    </div>
  );
}

export default App;
