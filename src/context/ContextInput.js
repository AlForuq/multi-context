import React, { createContext, useContext, useState } from "react";

export const createdGlobalContext = createContext();
export const GlobalInputUseContext = () => useContext(createdGlobalContext);
// we just export GlobalInputUseContext as a function and import it and call it in any file we want,
// so that we dont have to import useContext and createdGlobalContext everytime

export const ContextInput = ({ children }) => {
  const [input, setInput] = useState("");
  return (
    <createdGlobalContext.Provider value={[input, setInput]}>
      {children}
    </createdGlobalContext.Provider>
  );
};
