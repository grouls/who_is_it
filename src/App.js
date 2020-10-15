import React from "react";
import { useLocalStorageState } from "./utils";
import "./styles.css";

function App() {
  const [names, setNames] = useLocalStorageState("names", []);
  const handleSubmit = (event) => {
    /*
    todo:
     * validate for dupilicates
     * clear input as name is added
     * show counter, e.g. 2/10 names added
    */
    event.preventDefault();
    const namesCopy = [...names];
    namesCopy.push(event.target.elements.name.value);
    setNames(namesCopy);
  };
  /*
   todo:
    * disable pick/reset buttons when no names
    * disable plus button when list is full
    * style whole app & display selected name better than alert
   */
  const pickName = () => {
    alert(names[Math.floor(Math.random() * names.length)]);
  };

  /* 
  todo: 
    * re-render list when local storage is cleared
  */
  const reset = () => window.localStorage.removeItem("names");
  /*
  todo:
    * make reusable components
  */
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name: </label>
        <input id="name" />
        <button type="submit">+</button>
      </form>
      <div>
        <button onClick={pickName}>pick</button>
        <button onClick={reset}>reset</button>
      </div>
      {names && names.map((name) => <li>{name}</li>)}
    </div>
  );
}

export default App;
