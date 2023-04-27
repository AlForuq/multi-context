import React from "react";
import { GlobalCounterUseContext } from "../context/ContextCounter";
import { GlobalInputUseContext } from "../context/ContextInput";

export const Counter = () => {
  const [counter, setCounter] = GlobalCounterUseContext();
  const [input] = GlobalInputUseContext();
  return (
    <div>
      <h1>{counter}</h1>
      <h3>{input}</h3>
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
    </div>
  );
};
