import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addvalue = () => {
    if (counter < 50) {
      counter = counter + 1;
      setCounter(counter);
      console.log("Update value", { counter });
    }
  };
  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("Update value", { counter });
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Count Value {counter}</h2>
      <button onClick={addvalue}>Add value </button>
      <button onClick={removevalue}>Remove Value</button>
    </>
  );
}

export default App;
