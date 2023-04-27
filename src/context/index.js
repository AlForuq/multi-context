import React from "react";
import { ContextInput } from "./ContextInput.js";
import { ContextStudents } from "./ContextStudents.js";
import { ContextCounter } from "./ContextCounter.js";

const GlobalContext = ({ children }) => {
  return (
    <ContextInput>
      <ContextStudents>
        <ContextCounter>{children}</ContextCounter>
      </ContextStudents>
    </ContextInput>
  );
};

export default GlobalContext;
