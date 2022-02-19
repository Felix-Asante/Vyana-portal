import React, { useState } from "react";
import { Switch } from "antd";
import SelectedItemCheckout from "../../components/SelectedItemCheckout";
import { useServiceContext } from "../../context/service-context";
import { EyeOutlined } from "@ant-design/icons";
import { DatePicker, Modal } from "antd";

export default function Checkout() {
	const { total, itemSelected } = useServiceContext();
	const [modoPage, setModoPage] = useState(" ");
	const [openModal, setOpenModal] = useState(false);
	const [maskedCardNumber, setMaskedCardNumber] = useState(" ");
	const [previewCardNumber, setPreviewCardNumber] = useState(false);

	console.log(modoPage.length);
	// MASK CARD NUMBER
	const maskCreditCardInput = (deleting = false) => {
		if (deleting) return;
		modoPage?.split("").forEach(() => {
			const mask = maskedCardNumber.concat("*");

			setMaskedCardNumber(mask);
		});
	};

	// accepting new user input
	const handleCreditNumberChange = (e) => {
		const latestInputs = e.target.value.trim().split("");
		const latestValue = Number(latestInputs[latestInputs.length - 1]);
		if (isNaN(latestValue)) {
			return;
		}
		setModoPage((prev) => prev.concat(latestValue.toString()));
		maskCreditCardInput();
	};

	// DELETE CARD NUMBER
	const keyPressHandler = (e) => {
		if (e.keyCode === 8) {
			setMaskedCardNumber((prev) => prev.slice(0, -1));
			setModoPage((prev) => prev.slice(0, -1));
			maskCreditCardInput(true);
		}
	};
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
								value={previewCardNumber ? modoPage : maskedCardNumber}
								onChange={handleCreditNumberChange}
								onKeyDown={keyPressHandler}
							/>
							{modoPage > 1 && (
								<EyeOutlined
									style={{ color: "#666666", cursor: "pointer" }}
									onClick={() => setPreviewCardNumber(!previewCardNumber)}
								/>
							)}
						</div>
					</div>
					<div className="amount mb-2">
						<div className="bg_light px-2 d-flex align-items-center">
							<img src="/dollar.svg" alt="card" />
							<input
								type="number"
								className="bg_light"
								id="method2"
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
					{/* <input
						type="text"
						placeholder="Fecha de factura    DD / MM / AA"
						className="border-light my-3 facture"
					/> */}
					<DatePicker
						bordered={false}
						placeholder="Fecha de factura    DD / MM / AA"
					/>

					<p
						className="text-center text-success cursor"
						onClick={() => setOpenModal(true)}
					>
						Agregar nota +
					</p>
					<button className="_btn btn_success mt-5 mx-auto d-block">
						Procesar pago
					</button>
				</div>
			</div>
			{/* MODAL THAT DISPLAYS HEN YOU CLICK ON Agregar nota + */}
			<Modal
				title=" "
				style={{ top: 20 }}
				visible={openModal}
				onOk={() => setOpenModal(false)}
				onCancel={() => setOpenModal(false)}
				okText="Bueno"
				cancelText="Cancelar"
			>
				<textarea name="text"></textarea>
			</Modal>
		</div>
	);
}
