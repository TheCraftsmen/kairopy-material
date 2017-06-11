/* eslint-disable */
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Snackbar from 'material-ui/Snackbar';
import {List, ListItem} from 'material-ui/List';
import { loginIn, loginOut, getData, getFeedItem, setToken, cleanPost } from './actions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import  banner from './banner.png'
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux';
import './App.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

class App extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {openMenu: false, like: false, message: ''};
    	this.handleToggle = this.handleToggle.bind(this);
    	this.sendLike = this.sendLike.bind(this);
    	this.getFeed = this.getFeed.bind(this);
    	this.loginUser = this.loginUser.bind(this);
		this.sendLike = this.sendLike.bind(this);
		this.logOut = this.logOut.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
  	}

  	handleToggle(){
  		this.setState({openMenu: true, like: false});	
  	}

  	closeMenu(){
  		this.setState({openMenu: false,like: false});
  	} 

  	closeSnackbar(){
  		this.setState({like: false, message: ''});

  	}

  	sendLike(id, user){
		var url_likes = '/' + id + '/likes';
		window.FB.api(url_likes,
		    "POST", {access_token: this.props.user.user_pages[id.split('_')[0]].access_token },
		    (response) => {
		     	if (response && !response.error) {
		    		this.setState({like: true, message: user});

		      }
		      
		    }
		);
		
	}

  	getFeed(){
	    window.FB.api("/me/accounts", (response) => {
	    if (response && !response.error) {
	      for (var i = response.data.length - 1; i >= 0; i--) {
	        var page_id = response.data[i].id;
	        var page_feed_url = '/' +  response.data[i].id + '/feed';
	        var page_access_token = response.data[i].access_token;
	        this.props.setToken(response.data[i]);
	        window.FB.api(page_feed_url, {access_token: response.data[i].access_token, 
	          fields: "likes,message,from"}, (response_feed) => {
	            if (response_feed && !response_feed.error) {
	            	this.props.cleanPost(response_feed.data[0].id.split('_')[0]);
					for (var j = response_feed.data.length - 1; j >= 0; j--) {
					var show_message = true;
					var feed_likes = response_feed.data[j].likes;
					if(feed_likes){
					  for (var v = feed_likes.data.length - 1; v >= 0; v--) {
					    if(feed_likes.data[v].id == response_feed.data[j].id.split('_')[0]){
					      show_message = false;
					      break;
					    }
					  }
					}
					if(response_feed.data[j].message != undefined && show_message && response_feed.data[j].message.toLowerCase().includes("kairopy")){
					  
					  this.props.getFeedItem(response_feed.data[j].id.split('_')[0], Object.assign({}, response_feed.data[j]));
					}
					}
	            }
	          }
	          );

	        }
	      }
	    });
	}

	componentDidMount() {
		window.fbAsyncInit = () => {
		  window.FB.init({
		    appId      : '<user-id>',
		    xfbml      : true,
		    version    : 'v2.9'
		  });
		  window.FB.getLoginStatus((response) => {
		    if (response.status === 'connected') {
		      this.props.loginIn()
		      this.getFeed()
		    }
		  });
		  window.FB.AppEvents.logPageView();
		}

		(function(d, s, id){
		   var js, fjs = d.getElementsByTagName(s)[0];
		   if (d.getElementById(id)) {return;}
		   js = d.createElement(s); js.id = id;
		   js.src = "//connect.facebook.net/en_US/sdk.js";
		   fjs.parentNode.insertBefore(js, fjs);
		 }(document, 'script', 'facebook-jssdk'));
		setInterval(() => { 
			if(this.props.user.login_status)
			{
				this.getFeed();
			} }, 5000);
	}

	loginUser(){
		window.FB.login( (response) => {
		 	if (response.status === 'connected') {
		     	this.props.loginIn()
		     	this.getFeed()
		  	}
		}, {scope: 'publish_actions,user_posts,manage_pages,publish_pages '} );
	}

	logOut(){
		window.FB.logout();
		this.props.loginOut()
	}

  	render(){
  		return(
  			<MuiThemeProvider>
		    <div>
		    <AppBar
		    className={"kairopy"}
		    onLeftIconButtonTouchTap={() => this.handleToggle()}
    		title="kairopy.com"
    		iconClassNameRight="muidocs-icon-navigation-expand-more"
  			/>
		    <Drawer 
		    open={this.state.openMenu} 
		    docked={false}
		    onRequestChange={() => this.closeMenu()} >
		    	{ this.props.user.login_status ? 
		    		<MenuItem onTouchTap={ () => this.logOut()} >Cerrar sesión</MenuItem> : 
		    		<MenuItem onTouchTap={() => this.loginUser()} >Iniciar sesión</MenuItem> }
		    	<a style={ { textDecorationLine : 'none' } } href="#/ShiftSystem">
		        	<MenuItem >Turnos programados</MenuItem>
		        </a>
		        <a style={ { textDecorationLine : 'none' } } target="_blank" href="https://www.facebook.com/kairopy">
		        	<MenuItem >Página oficial</MenuItem>
		        </a>
		        
		    </Drawer>
		    {
		    	Object.keys(this.props.posts).length?
				<Tabs>
		     	{

	         		Object.keys(this.props.posts).map( 
						clave => <Tab label={ this.props.user.user_pages[clave].name } key={ clave }>
						{
							this.props.posts[clave].length?
							this.props.posts[clave].map( post =>
								<ListItem  
								key={ post.id }	
								primaryText= { post.from.name }
								secondaryText= { post.message } 
								onTouchTap={() => this.sendLike(post.id, post.from.name)} />
							):
							<Card>
				    			<CardText className={"center"}>
							    	<strong>No quedan turnos pendientes.</strong>
							    </CardText>:			    
							    <CardActions>
							      { this.props.user.login_status?
							      	<RaisedButton label="Cerrar sesión" onTouchTap={ () => this.logOut()} />:
							      	<RaisedButton label="Empezar" onTouchTap={ () => this.loginUser()} />
							      }
							      	<a style={ { textDecorationLine : 'none' } } target="_blank" href="https://www.facebook.com/kairopy">
					        		<RaisedButton label="Página  Oficial" />
					        		</a>
							    </CardActions>
							</Card>
						}						
						</Tab>
					)
	          	}
		    	</Tabs>:
		    	<Card>
		    		{ this.props.user.login_status?
		    			<CardText className={"center"}>
					    	<strong>No quedan turnos pendientes.</strong>
					    </CardText>:
		    			<div>
		    				<CardMedia>
						      <img src={banner}/>
						    </CardMedia>
						    <CardTitle title="Kairopy.com" subtitle="Sistema de turnos" />
						    <CardText className={"center"}>
						      <strong>¿Qué es kairopy.com?</strong><br />Es un sistema de turnos en tiempo real, creado para optimizar tu tiempo y el vínculo con tus clientes.
						    </CardText>
						    <CardText className={"center"}>
						     <strong>¿Cómo funciona?</strong><br />El sistema discrimina como turno, todos los comentarios que se hagan en el muro de tu página de facebook, que contengan la palabra kairopy.
						    </CardText>
						    <CardText className={"center"}>
						     <strong>¿Qué permisos necesita?</strong><br />La primera vez que inicies sesión con kairopy se te van a pedir unos permisos para poder leer y escribir en tu muro. Es necesario aceptar esos permisos para poder utilizar la aplicación. Kairopy no almacena datos sensibles del usuario.
						    </CardText>	
		    			</div>
					    
		    		}
				    
				    <CardActions>
				      { this.props.user.login_status?
				      	<RaisedButton label="Cerrar sesión" onTouchTap={ () => this.logOut()} />:
				      	<RaisedButton label="Empezar" onTouchTap={ () => this.loginUser()} />
				      }
				      	<a style={ { textDecorationLine : 'none' } } target="_blank" href="https://www.facebook.com/kairopy">
		        		<RaisedButton label="Página  Oficial" />
		        		</a>
				    </CardActions>
				  </Card>

		    }
		    

		    <Snackbar
          	open={this.state.like}
          	message= {"Turno finalizado para: " + this.state.message}
          	autoHideDuration={4000}
          	onRequestClose={() => this.closeSnackbar() }
        	/>
		    </div>
		  </MuiThemeProvider>	
  		)
  		
  	}
  	
}

export default connect( state => state, { loginIn, loginOut, getData, getFeedItem, setToken, cleanPost })(App);
