import { createContext, useContext, useState } from "react";

const serviceContext = createContext();

export function useServiceContext() {
	return useContext(serviceContext);
}
export default function ServiceProvider({ children }) {
	const [itemSelected, setItemSelected] = useState([]);
	const [total, setTotal] = useState(0);

	const deleteItem = (item) => {
		setItemSelected(() => itemSelected.filter((i) => i.id !== item.id));
		const total = item.qty * item.price;
		setTotal((prev) => prev - total);
	};
	const modifyQuantity = (id, operation) => {
		const index = itemSelected.findIndex((i) => i.id === id);
		const existingItem = itemSelected[index];
		const AlreadySelectedItems = itemSelected;
		if (operation === "INCREASE") {
			const updatedItem = { ...existingItem, qty: +existingItem.qty + 1 };
			AlreadySelectedItems[index] = updatedItem;

			setItemSelected(AlreadySelectedItems);
			setTotal((prev) => prev + existingItem.price);
		} else if (operation === "DECREASE") {
			if (existingItem.qty === 1) return;
			const updatedItem = { ...existingItem, qty: +existingItem.qty - 1 };
			AlreadySelectedItems[index] = updatedItem;

			setItemSelected(AlreadySelectedItems);
			setTotal((prev) => prev - existingItem.price);
		} else return;
	};
	const addItem = (item) => {
		// CHECK TO SEE IF THE ITEM IS ALREADY ADDED
		const index = itemSelected.findIndex((i) => i.id === item.id);

		if (index >= 0) {
			const existingItem = itemSelected[index];
			const AlreadySelectedItems = itemSelected;
			const updatedItem = { ...existingItem, qty: +existingItem.qty + 1 };
			AlreadySelectedItems[index] = updatedItem;

			setItemSelected(AlreadySelectedItems);
			setTotal((prev) => prev + existingItem.price);
		} else {
			setItemSelected((prevItems) => [...prevItems, item]);
			setTotal((prev) => prev + Number(item.price));
		}
	};
	const defaultValues = {
		itemSelected,
		total,
		modify: modifyQuantity,
		addItem: addItem,
		deleteItem,
	};
	return (
		<serviceContext.Provider value={defaultValues}>
			{children}
		</serviceContext.Provider>
	);
}
