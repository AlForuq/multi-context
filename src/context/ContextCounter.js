import React, { createContext, useContext, useState } from "react";

const createdGlobalContext = createContext();
export const GlobalCounterUseContext = () => useContext(createdGlobalContext);
// we just export GlobalCounterUseContext as a function and import it and call it in any file we want,
// so that we dont have to import useContext and createdGlobalContext everytime

export const ContextCounter = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <createdGlobalContext.Provider value={[counter, setCounter]}>
      {children}
    </createdGlobalContext.Provider>
  );
};
