import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import _ from 'lodash'

export default class HomebrewUploader extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			model: null
		};
	}

	fileInputRef = React.createRef();


	fileChange = e => {

		const reader = new FileReader();
		reader.onload = (e) => {
			let parser = new DOMParser(),
				xmlDoc = parser.parseFromString(e.target.result, "text/xml"),
				json = this.xmlToJson(xmlDoc);

			if (json && json.recipes && json.recipes.recipe) {
				json = json.recipes.recipe;
			}

			this.setState({ model: json }, () => {
				console.log(this.state);
				this.props.onRecipeSelected(this.state.model);
			});
		};	
		reader.onerror = (e) => {
			console.error(e);
		}	
		reader.readAsText(e.target.files[0], "UTF-8");
	};

	xmlToJson(xml) {
	
		// Create the return object
		var obj = {};
	
		if (xml.nodeType === 1) { // element
			// do attributes
			if (xml.attributes.length > 0) {
			obj["@attributes"] = {};
				for (var j = 0; j < xml.attributes.length; j++) {
					var attribute = xml.attributes.item(j);
					obj["@attributes"][_.camelCase(attribute.nodeName)] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType === 3) { // text
			obj = xml.nodeValue;
		}
	
		// do children
		if (xml.hasChildNodes()) {
			for(var i = 0; i < xml.childNodes.length; i++) {
				var item = xml.childNodes.item(i);
				var nodeName = _.camelCase(item.nodeName);
				if (typeof(obj[nodeName]) === "undefined") {
					obj[nodeName] = this.xmlToJson(item);
				} else {
					if (typeof(obj[nodeName].push) === "undefined") {
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

			</Form>
		);
	}
}
