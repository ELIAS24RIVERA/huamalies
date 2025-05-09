import { createContext, useState } from "react";

// ✅ Primero declara el contexto
export const FilterContext = createContext();

// ✅ Luego lo usas en el proveedor
const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    country: "Todos los paises",
    price: "Cualquier precio",
    size: "Cualquier tamaño",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
