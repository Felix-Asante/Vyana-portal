import React from "react";
import { Switch } from "antd";
import SelectedItemCheckout from "../../components/SelectedItemCheckout";
import { useServiceContext } from "../../context/service-context";
export default function Checkout() {
	const { total, itemSelected } = useServiceContext();

	return (
		<div className="checkout p-3 ">
			<div className="total">
				<div className="d-flex justify-content-between">
					<p className="text_light">Total</p>
					<p className="text_light">Order №070490</p>
				</div>
				<h1 className="fw-bold mb-3">RD${total}</h1>
				<div className="form">
					<div className="discount">
						<label htmlFor="discount">Descuento</label>
						<select name="discount" id="discount" className="bg_light">
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
						</select>
					</div>
					<div className="payment-methods mb-2">
						<label htmlFor="method">Modo de pago</label>
						<div className="bg_light px-2 d-flex align-items-center">
							<img src="/card.svg" alt="card" />
							<input
								type="text"
								className="bg_light"
								id="method"
								placeholder="RD$2,500"
							/>
						</div>
					</div>
					<div className="amount mb-2">
						<div className="bg_light px-2 d-flex align-items-center">
							<img src="/dollar.svg" alt="card" />
							<input
								type="text"
								className="bg_light"
								id="method"
								placeholder="RD$2,500"
							/>
						</div>
					</div>

					{/* SWITCH BUTTONS */}
					<div className="d-flex justify-content-between mt-3">
						<p className="text_lighter">Dividir pago</p>
						<Switch defaultChecked />
					</div>
					<div className="d-flex justify-content-between">
						<p className="text_lighter">Cortesía/Invitado</p>
						<Switch />
					</div>
					<div className="d-flex justify-content-between">
						<p className="text_lighter">Impuestos</p>
						<Switch />
					</div>
					{/* SELECTED ITEMS */}
					{itemSelected.map((item) => (
						<SelectedItemCheckout item={item} key={item.id} />
					))}

					{/* BOTTOM INPUT FIELD */}
					<input
						type="text"
						placeholder="Fecha de factura    DD / MM / AA"
						className="border-light my-3 facture"
					/>
					<p className="text-center">
						<a href="#">Agregar nota +</a>
					</p>
					<button className="_btn btn_success mt-5 mx-auto d-block">
						Procesar pago
					</button>
				</div>
			</div>
		</div>
	);
}
