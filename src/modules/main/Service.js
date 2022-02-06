import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
const services = [
	{ id: 1, name: "Entrenamiento Personal", price: 2500 },
	{ id: 2, name: "Entrenamiento Personal", price: 2500 },

	{
		id: 3,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 4,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 5,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 6,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 7,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 8,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 9,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 10,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 11,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
	{
		id: 12,
		name: "Virtual Entrenamiento personal",
		subtitle: "12 x mes (Individual)",
		price: 2500,
	},
];
export default function Service() {
	const [selectedOption, setSelectedOption] = useState("Fisioterapia 1");
	// const [toggleSelect, setToggleSelect] = useState(true);
	const optionsChangeHandler = (option) => {
		setSelectedOption(option);
	};
	return (
		<div className="service p-4 rounded mb-4">
			<div className="filter d-flex justify-content-between align-items-center">
				<div className="search-input me-4">
					<div className="d-flex align-items-center">
						<p className="fw-bold me-3 mt-3">Servicios</p>
						<form className=" input-field d-flex align-items-center">
							{/* <SearchOutlined className="search-icon" /> */}
							<img src="/searchh.svg" alt="" className="search-icon" />
							<input
								type="text"
								className="bg_light rounded w-100"
								placeholder="Search"
							/>
						</form>
					</div>
				</div>
				<div className="dropdown">
					<button
						className="btn bg_light dropdown-toggle p-2 border-success"
						type="button"
						id="dropdownMenuButton2"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{selectedOption}
					</button>
					<ul
						className="dropdown-menu bg_light"
						aria-labelledby="dropdownMenuButton2"
					>
						<li onClick={() => optionsChangeHandler("Fisioterapia 1")}>
							<a className="dropdown-item" href="#">
								Fisioterapia 1
							</a>
						</li>
						<li onClick={() => optionsChangeHandler("Fisioterapia 2")}>
							<a className="dropdown-item" href="#">
								Fisioterapia 2
							</a>
						</li>
						<li onClick={() => optionsChangeHandler("Fisioterapia 3")}>
							<a className="dropdown-item" href="#">
								Fisioterapia 3
							</a>
						</li>
						<li onClick={() => optionsChangeHandler("Fisioterapia 4")}>
							<a className="dropdown-item" href="#">
								Fisioterapia 4
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="row my-3">
				{services.map((service, index) => (
					<div className="col-lg-3 col-md-6 mb-2" key={index}>
						<ServiceCard service={service} />
					</div>
				))}
			</div>
		</div>
	);
}
