import React, { useState } from "react";
import { Xml } from "../util";

export default function Uploader({ onLoad }) {
	const [state, setState] = useState({});
	const fileInputRef = React.createRef();

	const fileChange = (e) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			let parser = new DOMParser(),
				xmlDoc = parser.parseFromString(e.target.result, "text/xml"),
				json = Xml.xmlToJson(xmlDoc);

			if (json && json.recipes && json.recipes.recipe) {
				json = json.recipes.recipe;
			}

			setState({ model: json });
			onLoad(json);
		};
		reader.onerror = (e) => {
			console.error(e);
		};
		reader.readAsText(e.target.files[0], "UTF-8");
	};

	return (
		<>
			<form>
				<div className="file has-name is-boxed">
					<label className="file-label">
						<input
							className="file-input"
							type="file"
							ref={fileInputRef}
							onChange={fileChange}
						/>
						<span className="file-cta">
							<span className="file-icon">
								<i className="fas fa-upload"></i>
							</span>
							<span className="file-label">Choose a file…</span>
						</span>
						<span className="file-name">{}</span>
					</label>
				</div>
			</form>
		</>
	);
}
