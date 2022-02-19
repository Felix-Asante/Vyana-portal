import React from "react";
import Header from "./components/Header";
import { useFilterContext } from "./context/filter-context";
import Checkout from "./modules/checkout/Checkout";
import MainArea from "./modules/main/Index";
export default function App() {
	const { filter, filterHandler } = useFilterContext();

	const closeFilterHandler = () => {
		// return if filter Option is not opened
		// else it will keep opening the filter options
		// when any part of the app is clicked
		if (!filter) return;
		// else open the filter options
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
