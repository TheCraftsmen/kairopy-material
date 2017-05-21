import React from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Snackbar from 'material-ui/Snackbar';
import {List, ListItem} from 'material-ui/List';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {open: false, like: false};
    	this.handleToggle = this.handleToggle.bind(this);
    	this.sendLike = this.sendLike.bind(this);
  	}

  	handleToggle(){
  		this.setState({open: !this.state.open});	
  	} 

  	sendLike(){
  		this.setState({like: !this.state.like});	
  	} 

  	render(){
  		return(
  			<MuiThemeProvider>
		    <div>
		    <AppBar
		    onLeftIconButtonTouchTap={this.handleToggle}
    		title="kairopy.com"
    		iconClassNameRight="muidocs-icon-navigation-expand-more"
  			/>
		    <Drawer 
		    open={this.state.open} 
		    docked={false}
		    onRequestChange={(open) => this.setState({open})} >
		        <MenuItem>Iniciar sesion</MenuItem>
		        <MenuItem>Obtener post</MenuItem>
		        <MenuItem>Tutorial</MenuItem>
		        <MenuItem>Acerca de</MenuItem>
		    </Drawer>

		    <List>
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Brendan Lim"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Eric Hoffman"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Grace Ng"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Kerem Suer"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Raquel Parrado"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		        
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Brendan Lim"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Eric Hoffman"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Grace Ng"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Kerem Suer"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={this.sendLike}
		        primaryText="Raquel Parrado"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		        
		      />
		    </List>

		    <Snackbar
          	open={this.state.like}
          	message="Event added to your calendar"
          	autoHideDuration={4000}
          	onRequestClose={this.handleRequestClose}
        	/>
		    </div>
		  </MuiThemeProvider>	
  		)
  		
  	}
  	
}

export default App;
