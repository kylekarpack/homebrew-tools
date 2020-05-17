import React from "react";
import Stats from "./recipe/stats";
import Uploader from "./Uploader";

export default function Recipe() {
	const onLoad = (data) => {
		console.log(data);
	};

	return (
		<div className="section">
			<Uploader onLoad={onLoad} />
			<Stats></Stats>
		</div>
	);
}
