import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceProvider from "./context/service-context";
import FilterProvider from "./context/filter-context";
import "./sass/main.scss";

ReactDOM.render(
	<React.StrictMode>
		<ServiceProvider>
			<FilterProvider>
				<App />
			</FilterProvider>
		</ServiceProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
