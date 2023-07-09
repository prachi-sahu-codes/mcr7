import { createContext, useContext, useState } from "react";
import { data } from "../backend/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [country, setCountry] = useState();
  const [destination, setDestination] = useState();
  return (
    <DataContext.Provider
      value={{ data, country, setCountry, destination, setDestination }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
