import React from "react";
import { useServiceContext } from "../../context/service-context";
import Service from "./Service";
import UserSearch from "./UserSearch";
export default function Index() {
	const { itemSelected } = useServiceContext();
	return (
		<div>
			<UserSearch />
			{/* ORDER INFO */}
			<div className="bg_light order-info p-3 my-3">
				<div className="d-flex justify-content-between">
					<div className="client">
						<p className="title">Cliente</p>
						<h6>Angel Perez</h6>
					</div>
					<div className="total">
						<p className="title">Estado de cuenta</p>
						<h6>RD$58,000.00</h6>
					</div>
					<div className="expiry-date">
						<p className="title">Fecha de expiración</p>
						<h6>13/12/2102</h6>
					</div>
					<div className="series">
						<p className="title">series</p>
						<h6>Check in</h6>
					</div>
					<div>
						<p className="title">Restantes</p>
						<h6 className="text-danger">Debe 1</h6>
					</div>
					<div className="selected-service">
						<p className="title">Servicios seleccionados</p>
						<h6 className="text-success">{itemSelected.length}</h6>
					</div>
				</div>
			</div>
			{/* SERVICES */}
			<Service />
		</div>
	);
}
