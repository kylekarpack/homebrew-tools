import React from "react";
import { Xml } from "../util";

export const fileChange = (e, onLoad) => {
	const reader = new FileReader();
	reader.onload = (e) => {
		let json = Xml.parseXmlStringToObject(e.target.result);
		json = json?.recipes?.recipe;
		onLoad(json);
	};

	reader.onerror = (e) => {
		throw e;
	};

	reader.readAsText(e.target.files[0], "UTF-8");
};

export default function Uploader({ onLoad }) {
	const fileInputRef = React.createRef();

	return (
		<>
			<form>
				<div className="file has-name is-boxed">
					<label className="file-label">
						<input
							className="file-input"
							type="file"
							ref={fileInputRef}
							onChange={(e) => fileChange(e, onLoad)}
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
