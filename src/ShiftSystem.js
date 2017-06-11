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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import  banner from './banner.png'
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import './App.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
const style = {
  float: 'left',
  'width': 190,
};

class ShiftSystem extends React.Component{
    render(){
        return(
            <MuiThemeProvider>  
            <div>
                    <AppBar
                        className={"kairopy"}
                        title="Asignacion de Turno"
                        iconElementRight={<FlatButton label="Agregar" />}
                    />
                    <List style={style}>
                        <Subheader>Lunes
                        </Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Martes</Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Miercoles</Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Jueves</Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Viernes</Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Sabado</Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Domingo</Subheader>
                        <ListItem
                          primaryText="Profile photo"
                          secondaryText="Change your Google+ profile photo"
                        />
                        <ListItem
                          primaryText="Show your status"
                          secondaryText="Your status is visible to everyone you use with"
                        />
                    </List>
            </div>
                      
            </MuiThemeProvider> 
            )
    }
}


export default connect( state => state, {})(ShiftSystem);