import React, { createContext, useContext, useState } from "react";

const SepedaContext = createContext();

export const SepedaProvider = ({ children }) => {
  const [sepedaList, setSepedaList] = useState([]);

  const addSepeda = (sepeda) => {
    setSepedaList([...sepedaList, { id: sepedaList.length + 1, ...sepeda }]);
  };

  const updateSepeda = (id, updatedSepeda) => {
    setSepedaList(sepedaList.map((sepeda) => (sepeda.id === id ? { ...sepeda, ...updatedSepeda } : sepeda)));
  };

  const removeSepeda = (id) => {
    setSepedaList(sepedaList.filter((sepeda) => sepeda.id !== id));
  };

  return <SepedaContext.Provider value={{ sepedaList, addSepeda, updateSepeda, removeSepeda }}>{children}</SepedaContext.Provider>;
};

export const useSepedaContext = () => {
  return useContext(SepedaContext);
};