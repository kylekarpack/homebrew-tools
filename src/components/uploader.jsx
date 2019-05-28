import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class HomebrewUploader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			model: null
		};
	}

	fileInputRef = React.createRef();

	onFormSubmit = e => {
		e.preventDefault(); // Stop form submit
		// this.fileUpload(this.state.file).then(response => {
		// 	console.log(response.data);
		// });
	};

	fileChange = e => {
		this.setState({ file: e.target.files[0] }, () => {
			console.log(this.state.file);
		});

		const reader = new FileReader();
		reader.onload = (e) => {
			console.log(e);
			const parser = new DOMParser(),
				xmlDoc = parser.parseFromString(e.target.result, "text/xml"),
				json = this.xmlToJson(xmlDoc);

			this.setState({ model: json	}, () => {
				console.log(this.state);
			});
		};	
		reader.onerror = (e) => {
			console.error(e);
		}	
		reader.readAsText(e.target.files[0], "UTF-8");
	};

	// Export Schedules Tab 2
	fileExport = file => {
		// handle save for export button function
	};

	xmlToJson(xml) {
	
		// Create the return object
		var obj = {};
	
		if (xml.nodeType == 1) { // element
			// do attributes
			if (xml.attributes.length > 0) {
			obj["@attributes"] = {};
				for (var j = 0; j < xml.attributes.length; j++) {
					var attribute = xml.attributes.item(j);
					obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType == 3) { // text
			obj = xml.nodeValue;
		}
	
		// do children
		if (xml.hasChildNodes()) {
			for(var i = 0; i < xml.childNodes.length; i++) {
				var item = xml.childNodes.item(i);
				var nodeName = item.nodeName;
				if (typeof(obj[nodeName]) == "undefined") {
					obj[nodeName] = this.xmlToJson(item);
				} else {
					if (typeof(obj[nodeName].push) == "undefined") {
						var old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(this.xmlToJson(item));
				}
			}
		}
		return obj;
	};

	render() {
		const { file } = this.state;
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Form.Field>
					<Button
						content="Choose File"
						labelPosition="left"
						icon="file"
						type="button"
						onClick={() => this.fileInputRef.current.click()}
					/>
					<input
						ref={this.fileInputRef}
						type="file"
						hidden
						onChange={this.fileChange}
					/>
				</Form.Field>

				<div>{JSON.stringify(this.state.model)}</div>

			</Form>

		);
	}
}
