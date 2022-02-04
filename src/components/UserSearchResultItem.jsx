import React, { useState } from "react";

export default function UserSearchResultItem({ item }) {
	const [isSelected, setIsSelected] = useState(false);

	const handleSelect = () => {
		setIsSelected(!isSelected);
	};
	return (
		<tr>
			<td onClick={() => handleSelect()}>
				{!isSelected && <img src="/radio.svg" alt="radio" />}
				{isSelected && <img src="/radio-colored.svg" alt="radio" />}
			</td>
			<>
				<td>{item.nombre}</td>
				<td>{item.apellido}</td>
				<td>{item.documento}</td>
				<td>{item.correo}</td>
				<td>{item.telefono}</td>
			</>
		</tr>
	);
}
