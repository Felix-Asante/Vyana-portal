import React from "react";

export default function SelectedItemCheckout() {
	return (
		<div className="selected-items mt-2">
			<div className="item d-flex justify-content-between">
				<h6 className="fw-bold">Entrenamiento Personal</h6>
				<p className="text_light">x</p>
			</div>
			<div className="item d-flex justify-content-between">
				<div>
					<div className="d-flex align-items-center">
						<div className="bg_light control">-</div>
						<span className="mx-2">1</span>
						<div className="bg_light control">+</div>
					</div>
				</div>
				<p className="text_light">RD$2500</p>
			</div>
		</div>
	);
}
