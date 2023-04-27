import React, { createContext, useContext, useState } from "react";
import { s } from "../mock";

const createdGlobalContext = createContext();
export const GlobalStudentUseContext = () => useContext(createdGlobalContext);
// we just export GlobalStudentUseContext as a function and import it and call it in any file we want,
// so that we dont have to import useContext and createdGlobalContext everytime

export const ContextStudents = ({ children }) => {
  const [users, setUser] = useState(s);
  return (
    <createdGlobalContext.Provider value={[users, setUser]}>
      {children}
    </createdGlobalContext.Provider>
  );
};
