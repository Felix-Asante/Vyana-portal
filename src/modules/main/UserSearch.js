import React, { useState } from "react";
import UserSearchResultItem from "../../components/UserSearchResultItem";
import { useFilterContext } from "../../context/filter-context";
const tableData = [
	{
		nombre: "Angel",
		apellido: "Prez",
		documento: "224-5652556-3",
		correo: "aperez@gmail.com",
		telefono: "809-565-6363",
	},
	{
		nombre: "Angel",
		apellido: "Prez",
		documento: "224-5652556-3",
		correo: "aperez@gmail.com",
		telefono: "809-565-6363",
	},
	{
		nombre: "Angel",
		apellido: "Prez",
		documento: "224-5652556-3",
		correo: "aperez@gmail.com",
		telefono: "809-565-6363",
	},
];
export default function UserSearch() {
	const [query, setQuery] = useState("");
	const { filter, filterHandler } = useFilterContext();

	return (
		<div className=" border_light rounded p-3 search">
			{/*  SEARCH FIELD */}
			<div className="d-flex align-items-start ">
				<div className="search-form me-3">
					<form>
						<div className="input-field d-flex align-items-center">
							<img src="/searchh.svg" alt="" className="search-icon" />

							<input type="text" className="bg_light" />
						</div>
					</form>
					{/* ADDED STOP PROPAGATION TO PREVENT THE CLICK EVENTS ON THE FILTER OPTION */}
					{/* FROM BUBBLING UP TO THE PARENT WHICH WILL CLOSE THE OPTION */}
					{filter && (
						<div
							className="bg_light p-1 mt-2 query"
							style={{ height: "70px" }}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="d-flex justify-content-around align-items-center h-100">
								<button
									className={`btn bg-white me-3 ${
										query === "nombre" ? "btn-outline-success" : " "
									}`}
									onClick={() => {
										setQuery("nombre");
									}}
								>
									Nombre
								</button>
								<button
									className={`btn bg-white me-3 ${
										query === "correo" ? "btn-outline-success" : " "
									}`}
									onClick={() => setQuery("correo")}
								>
									Correo
								</button>
								<button
									className={`btn bg-white me-3 ${
										query === "telefono" ? "btn-outline-success" : " "
									}`}
									onClick={() => setQuery("telefono")}
								>
									Teléfono
								</button>
								<button
									className={`btn bg-white me-3 ${
										query === "documento" ? "btn-outline-success" : " "
									}`}
									onClick={() => setQuery("documento")}
								>
									Documento
								</button>
								<p className="text-success pt-3">Busar</p>
							</div>
						</div>
					)}
				</div>
				<img
					src="/filter-button.svg"
					alt="filter"
					className="filter-button"
					onClick={() => filterHandler()}
				/>
			</div>
			{/* ! FILTER */}

			{/* SEARCH RESULT */}
			<table className="table mt-3">
				{/* bg_light can be found in sass/globals */}

				<thead className="table-head ">
					<tr>
						<th scope="col"></th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Documento</th>
						<th scope="col">Correo</th>
						<th scope="col">Teléfono</th>
					</tr>
				</thead>
				<tbody className="search-table-body">
					{tableData.map((item, index) => (
						<UserSearchResultItem key={index} item={item} />
					))}
				</tbody>
			</table>
		</div>
	);
}
