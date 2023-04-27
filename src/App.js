import React from "react";
import "./App.css";
import Students from "./Components/Students";
import { Counter } from "./Components/Counter";
import { Input } from "./Components/Input";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Students />
      <Counter />
      <Input />
    </div>
  );
}

export default App;
