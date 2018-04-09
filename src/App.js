import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppFrame from "./AppFrame"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
			<HashRouter>
				<div>
					<MuiThemeProvider>
						<AppFrame />
					</MuiThemeProvider>
					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</HashRouter>
    );
  }
}

export default App;
