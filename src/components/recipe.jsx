import { Component } from "react";
import HomebrewUploader from "./uploader";
import Stats from "./recipe/stats";

class Recipe extends Component {

	render() {
		return (
			<>
				<HomebrewUploader></HomebrewUploader>
				<Stats></Stats>
			</>
		);
	}
}

export default Recipe;