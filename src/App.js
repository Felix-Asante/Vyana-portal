import React from "react";
import Header from "./components/Header";
import ServiceProvider from "./context/service-context";
import Checkout from "./modules/checkout/Checkout";
import MainArea from "./modules/main/Index";
export default function App() {
	return (
		<ServiceProvider>
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
		</ServiceProvider>
	);
}
