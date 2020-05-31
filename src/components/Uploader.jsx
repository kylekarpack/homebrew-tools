import React from "react";
import { Xml } from "../util";

const readFileAsync = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = reject;
		reader.readAsText(file, "UTF-8");
	});
};

export const fileChange = async (e, onLoad) => {
	try {
		const result = await readFileAsync(e.target.files[0]);
		let json = Xml.parseXmlStringToObject(result);
		json = json?.recipes?.recipe;
		onLoad(json);
	} catch {
		// Do nothing
	}
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
