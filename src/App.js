import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import HomebrewTable from "./components/table";

function App() {
	return (
		<div className="App">
			<HomebrewTable></HomebrewTable>
		</div>
	);
}

export default App;
