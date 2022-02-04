import React from "react";

export default function ServiceCard({ service }) {
	return (
		<div className="bg_light p-2 service-card text-center">
			<h5>{service.name}</h5>

			{service.subtitle && (
				<p className="text-center mb-0">{service.subtitle}</p>
			)}
			<div className="d-flex justify-content-center align-items-center">
				<p className="text-center me-4 pt-3">RD${service.price}</p>

				<img src="/clock.svg" alt="clock" className="service-card-clock" />
			</div>
		</div>
	);
}
