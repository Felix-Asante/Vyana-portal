import React, { useState, useEffect } from "react";
import { useServiceContext } from "../context/service-context";
import { DatePicker, TimePicker } from "antd";

export default function ServiceCard({ service }) {
	const [isSelected, setIsSelected] = useState(false);
	const [close, setClose] = useState(false);
	const { addItem, itemSelected } = useServiceContext();
	const serviceSelected = itemSelected.some((item) => item.id === service.id);

	useEffect(() => {
		if (!serviceSelected) {
			setIsSelected(false);
		}
	}, [serviceSelected]);

	const addServiceHandler = () => {
		setIsSelected(true);
		service.qty = 1;
		addItem(service);
	};
	const serviceCardClasses = `${
		isSelected && serviceSelected
			? "border-success bg_light p-2 service-card text-center mb-2 "
			: "bg_light p-2 service-card text-center mb-2"
	}`;
	return (
		<div className="service-cards">
			<div className={serviceCardClasses} onClick={addServiceHandler}>
				<h5>{service.name}</h5>

				{service.subtitle && (
					<p className="text-center mb-0">{service.subtitle}</p>
				)}
				<div className="d-flex justify-content-center align-items-center">
					<p className="text-center me-4 pt-3">RD${service.price}</p>
					{isSelected && (
						<img src="/clock.svg" alt="clock" className="service-card-clock" />
					)}
				</div>
			</div>

			{isSelected && !close && (
				<div className="form bg-white  py-2 px-3">
					<div className="d-flex justify-content-between">
						<h5>{service.name}</h5>
						<h5
							className="fw-bold text_light cursor"
							onClick={() => setClose(true)}
						>
							X
						</h5>
					</div>
					<div className="d-flex align-items-center qty ">
						<p className="me-3 mb-0">Cantidad</p>
						<div>
							<div className="d-flex align-items-center">
								<div className="bg_light control">-</div>
								<span className="mx-2">1</span>
								<div className="bg_light control">+</div>
							</div>
						</div>
					</div>

					<div className="inputs mt-2">
						<input type="text" placeholder={`RD$${service.price}`} readOnly />
						<DatePicker bordered={false} placeholder="Fecha DD/MM/AA" />
						{/* <input type="text" placeholder="Fecha DD/MM/AA" /> */}
						<input type="number" placeholder="N??mero de sesiones" />
						{/* <input type="text" placeholder="Duraci??n de la clase  H/ M " /> */}
						<TimePicker
							placeholder="Duraci??n de la clase  H/ M"
							bordered={false}
						/>

						<p className="text-success fw-bold- text-center d-block cursor">
							Guardar
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
