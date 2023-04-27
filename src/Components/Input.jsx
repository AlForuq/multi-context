import React from "react";
import { GlobalInputUseContext } from "../context/ContextInput";

export const Input = () => {
  const [input, setInput] = GlobalInputUseContext();

  return (
    <div>
      <h1>Type:{input}</h1>
      <input onChange={({ target: { value } }) => setInput(value)} />
    </div>
  );
};
