import React, { useState, createContext, useContext } from "react";

const FilterContext = createContext();
export function useFilterContext() {
	return useContext(FilterContext);
}
export default function FilterProvider({ children }) {
	const [filter, setFilter] = useState(false);
	const filterHandler = () => {
		setFilter(!filter);
	};
	return (
		<FilterContext.Provider value={{ filter, filterHandler }}>
			{children}
		</FilterContext.Provider>
	);
}
