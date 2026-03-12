import Button from "./Button";
import { useState, useEffect } from "react";

export default function DisplayCounter() {
  const [counter, setCounter] = useState(0);

  const addOne = () => setCounter(counter + 1);

  const removeOne = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const addFive = () => setCounter(counter + 5);

  // // 1️⃣ Har render par run hoga
  // useEffect(() => {
  //   console.log("Component render hua");
  // });

  // // 2️⃣ Sirf ek baar run hoga (component mount)
  // useEffect(() => {
  //   console.log("Component load hua - ye sirf ek baar chalega");
  // }, []);

  // 3️⃣ Counter change hone par run hoga
  // useEffect(() => {
  //   console.log("Current counter value:", counter);
  // }, [counter]);

  return (
    <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg p-8 sm:p-10 md:p-12 rounded-2xl shadow-2xl text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Counter App</h1>

      <h2 className="text-xl sm:text-2xl text-blue-700 mb-8">
        Count Value: {counter}
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <Button onclick={addOne} text="Add" />
        <Button onclick={removeOne} text="Remove" />
        <Button onclick={addFive} text="Add Five" />
      </div>
    </div>
  );
}
