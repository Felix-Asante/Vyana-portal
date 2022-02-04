import React, { useState } from "react";
import UserSearchResultItem from "../../components/UserSearchResultItem";
import { SearchOutlined } from "@ant-design/icons";

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
	const [filter, setFilter] = useState(false);
	const [query, setQuery] = useState("");
	return (
		<div className=" border_light rounded p-3 main-area">
			{/*  SEARCH FIELD */}
			<div className="d-flex align-items-start ">
				<div className="search-form me-3">
					<form>
						<div className="input-field d-flex align-items-center">
							<SearchOutlined className="search-icon" />

							<input type="text" className="bg_light" />
						</div>
					</form>
					{filter && (
						<div className="bg_light p-1 mt-2 query" style={{ height: "70px" }}>
							<div className="d-flex justify-content-around align-items-center h-100">
								<button
									className={`btn bg-white me-3 ${
										query === "nombre" ? "btn-outline-success" : " "
									}`}
									onClick={() => setQuery("nombre")}
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
					onClick={() => setFilter(!filter)}
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
