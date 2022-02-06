import { createContext, useContext, useState } from "react";

const serviceContext = createContext();

export function useServiceContext() {
	return useContext(serviceContext);
}
export default function ServiceProvider({ children }) {
	const [itemSelected, setItemSelected] = useState([]);
	const [total, setTotal] = useState([]);
	const modifyQuantity = (item) => {
		console.log(item);
	};
	const addItem = (item) => {
		console.log(item);
	};
	const defaultValues = {
		itemSelected,
		total,
		modify: modifyQuantity,
		addItem: addItem,
	};
	return (
		<serviceContext.Provider value={defaultValues}>
			{children}
		</serviceContext.Provider>
	);
}
