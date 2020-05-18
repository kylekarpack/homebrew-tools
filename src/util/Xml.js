import { camelCase } from "lodash";

export default class Xml {

	static parseXmlStringToObject = (stringContent) => {
		const parsed = this.parse(stringContent);
		return this.xmlToJson(parsed);
	}

	static parse = (stringContent) => {
		const parser = new DOMParser();
		return parser.parseFromString(stringContent, "text/xml");
	}

	static xmlToJson = (xml) => {
		// Create the return object
		var obj = {};

		if (xml.nodeType === 1) {
			// element
			// do attributes
			if (xml.attributes.length > 0) {
				obj["@attributes"] = {};
				for (var j = 0; j < xml.attributes.length; j++) {
					var attribute = xml.attributes.item(j);
					obj["@attributes"][camelCase(attribute.nodeName)] =
						attribute.nodeValue;
				}
			}
		} else if (xml.nodeType === 3) {
			// text
			obj = xml.nodeValue;
		}

		// do children
		if (xml.hasChildNodes()) {
			for (var i = 0; i < xml.childNodes.length; i++) {
				var item = xml.childNodes.item(i);
				var nodeName = camelCase(item.nodeName);
				if (typeof obj[nodeName] === "undefined") {
					obj[nodeName] = Xml.xmlToJson(item);
				} else {
					if (typeof obj[nodeName].push === "undefined") {
						var old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(Xml.xmlToJson(item));
				}
			}
		}

		// Move up all text attrs
		for (let key in obj) {
			if (typeof obj[key].text === "string") {
				obj[key] = obj[key].text;
			} else {
				delete obj[key].text;
			}
		}

		// Move up all sub-arrays
		for (let key in obj) {
			const value = obj[key];
			const keys = Object.keys(value);
			if (typeof value === "object" && keys.length === 1 && Array.isArray(value[keys[0]])) {
				obj[key] = value[keys[0]];
			}
		}

		return obj;
	};
}
