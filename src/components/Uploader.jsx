import React from "react";
import { Xml } from "../util";

export default function Uploader({ onLoad }) {
	const fileInputRef = React.createRef();

	const fileChange = (e) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const xmlDoc = Xml.parse(e.target.result);
			let	json = Xml.xmlToJson(xmlDoc);

			if (json && json.recipes && json.recipes.recipe) {
				json = json.recipes.recipe;
			}

			onLoad(json);
		};

		reader.onerror = (e) => {
			throw e;
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