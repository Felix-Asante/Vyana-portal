import React, { useState } from "react";

export default function Service() {
	const [selectedOption, setSelectedOption] = useState("Fisioterapia 1");
	// const [toggleSelect, setToggleSelect] = useState(true);
	const optionsChangeHandler = (option, e) => {
		e.preventDefault();
		setSelectedOption(option);
	};
	return (
		<div className="service p-3 rounded">
			<div className="filter d-flex justify-content-between align-items-center">
				<div className="search-input">
					<div className="d-flex align-items-center">
						<p className="fw-bold">Servicios</p>
						<form>
							<input type="text" className="bg_light rounded" />
						</form>
					</div>
				</div>
				<div class="dropdown">
					<button
						class="btn bg_light dropdown-toggle p-2 border-success"
						type="button"
						id="dropdownMenuButton2"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{selectedOption}
					</button>
					<ul
						class="dropdown-menu bg_light"
						aria-labelledby="dropdownMenuButton2"
					>
						<li onClick={() => optionsChangeHandler("Fisioterapia 2")}>
							<a class="dropdown-item" href="#">
								Fisioterapia 2
							</a>
						</li>
						<li onClick={() => optionsChangeHandler("Fisioterapia 3")}>
							<a class="dropdown-item" href="#">
								Fisioterapia 3
							</a>
						</li>
						<li onClick={() => optionsChangeHandler("Fisioterapia 4")}>
							<a class="dropdown-item" href="#">
								Fisioterapia 4
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
