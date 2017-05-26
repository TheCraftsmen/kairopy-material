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
    	this.state = {openMenu: false, like: false, message: ''};
    	this.handleToggle = this.handleToggle.bind(this);
    	this.sendLike = this.sendLike.bind(this);
  	}

  	handleToggle(){
  		this.setState({openMenu: true, like: false});	
  	} 

  	closeMenu(){
  		this.setState({openMenu: false,like: false});
  	}

  	sendLike(e){
  		console.log(e);
  		this.setState({like: true, message: e});	
  	} 

  	render(){
  		return(
  			<MuiThemeProvider>
		    <div>
		    <AppBar
		    onLeftIconButtonTouchTap={ () => this.handleToggle() }
    		title="kairopy.com"
    		iconClassNameRight="muidocs-icon-navigation-expand-more"
  			/>
		    <Drawer 
		    open={this.state.openMenu} 
		    docked={false}
		    onRequestChange={ () => this.closeMenu() } >
		        <MenuItem>Iniciar sesion</MenuItem>
		        <MenuItem>Obtener post</MenuItem>
		        <MenuItem>Tutorial</MenuItem>
		        <MenuItem>Acerca de</MenuItem>
		    </Drawer>

		    <List>
		      <ListItem
		      	onTouchTap={() => this.sendLike("Brendan Lim")}
		        primaryText="Brendan Lim"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Eric Hoffman")}
		        primaryText="Eric Hoffman"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Grace Ng")}
		        primaryText="Grace Ng"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Kerem Suer")}
		        primaryText="Kerem Suer"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Raquel Parrado")}
		        primaryText="Raquel Parrado"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		        
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Brendan Lim")}
		        primaryText="Brendan Lim"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Eric Hoffman")}
		        primaryText="Eric Hoffman"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Grace Ng")}
		        primaryText="Grace Ng"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Kerem Suer")}
		        primaryText="Kerem Suer"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		      />
		      <ListItem
		      	onTouchTap={() => this.sendLike("Raquel Parrado")}
		        primaryText="Raquel Parrado"
		        secondaryText="bla bla bla bla"
		        leftAvatar={<Avatar src="http://placehold.it/350x350" />}
		        
		      />
		    </List>

		    <Snackbar
          	open={this.state.like}
          	message={this.state.message}
          	autoHideDuration={3000}
          	onRequestClose={this.handleRequestClose}
        	/>
		    </div>
		  </MuiThemeProvider>	
  		)
  		
  	}
  	
}

export default App;
