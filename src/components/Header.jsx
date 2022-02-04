import React from "react";
import { Avatar, Image } from "antd";
export default function Header() {
	return (
		<div className="bg_light header">
			<div className="container h-100">
				<div className="d-flex justify-content-between align-items-center h-100">
					<img src="/logo.svg" alt="vyana logo" className="logo" />
					<div className="user d-flex align-items-center h-100">
						<p className="m-0 me-2">Angelo Soto</p>
						<Avatar src={<Image src={"/person.jpg"} />} />
					</div>
				</div>
			</div>
		</div>
	);
}
