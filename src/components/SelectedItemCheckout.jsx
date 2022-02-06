import React from "react";
import { useServiceContext } from "../context/service-context";

export default function SelectedItemCheckout({ item }) {
	const { deleteItem, modify } = useServiceContext();
	return (
		<div className="selected-items mt-2">
			<div className="item d-flex justify-content-between">
				<h6 className="fw-bold">{item?.name}</h6>
				<p
					className="text_light"
					style={{ cursor: "pointer" }}
					onClick={() => deleteItem(item)}
				>
					x
				</p>
			</div>
			<div className="item d-flex justify-content-between">
				<div>
					<div className="d-flex align-items-center">
						<div
							className="bg_light control"
							onClick={() => modify(item?.id, "DECREASE")}
						>
							-
						</div>
						<span className="mx-2">{item.qty}</span>
						<div
							className="bg_light control"
							onClick={() => modify(item?.id, "INCREASE")}
						>
							+
						</div>
					</div>
				</div>
				<p className="text_light">RD${+item.qty * +item.price}</p>
			</div>
		</div>
	);
}
