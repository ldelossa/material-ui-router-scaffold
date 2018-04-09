import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from "react-router-dom";


export default class AppFrame extends Component {
	constructor(props){
		super(props);
		this.state = {open: false}
	}

	handleRightNavClick = () => {
		console.log("Got here")
		this.setState({open: !this.state.open})
	}

	render() {
		return(
			<div>
				<AppBar
					title="Title"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonClick={this.handleRightNavClick}
				/>
				<Drawer open={this.state.open}
				        docked={false}
								onRequestChange={this.handleRightNavClick}
				>
					<MenuItem>
						<NavLink to="/">Home</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink to="/contact">Contact</NavLink>
					</MenuItem>
				</Drawer>
			</div>
		);
	}
}
