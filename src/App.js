import React from "react";
import Header from "./components/Header";
import { useFilterContext } from "./context/filter-context";
import Checkout from "./modules/checkout/Checkout";
import MainArea from "./modules/main/Index";
export default function App() {
	const { filter, filterHandler } = useFilterContext();

	const closeFilterHandler = () => {
		if (!filter) return;
		filterHandler();
	};
	return (
		<div onClick={() => closeFilterHandler()}>
			{/*  HEADER */}
			<Header />
			{/* MAIN AREA SECTION + ASIDE
			 */}
			<div className="container mt-4">
				<div className="row">
					<div className="col-lg-9">
						<MainArea />
					</div>
					<div className="col-lg-3">
						<Checkout />
					</div>
				</div>
			</div>
		</div>
	);
}
