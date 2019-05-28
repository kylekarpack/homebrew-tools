import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image } from 'semantic-ui-react'


import HomebrewMenu from "./components/menu";
import HomebrewTable from "./components/table";
import HomebrewUploader from "./components/uploader";

function App() {
	return (
		<div className="App">
		<Grid>
			<Grid.Row>
				<Grid.Column width={3}>
					<HomebrewMenu></HomebrewMenu>
				</Grid.Column>
				<Grid.Column width={13}>
					<HomebrewUploader></HomebrewUploader>

					<HomebrewTable></HomebrewTable>
				</Grid.Column>
			</Grid.Row>

  		</Grid>
			
			
		</div>
	);
}

export default App;
