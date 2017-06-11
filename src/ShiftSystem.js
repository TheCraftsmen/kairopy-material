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
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

import './App.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
const style = {
  float: 'left',
  'width': 190,
};

class ShiftSystem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose(e) {
        let text = document.getElementById('dialog-text').value;
        let date = document.getElementById('dialog-date').value;
        let time = document.getElementById('dialog-time').value;
        console.log(text, date, time);
        this.setState({open: false});
    };

    render(){
        const actions = [
          <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => this.handleClose()}
          />,
        ];
        return(
            <MuiThemeProvider>  
            <div>
                    <AppBar
                        className={"kairopy"}
                        title="Asignacion de Turno"
                        iconElementRight={<FlatButton onTouchTap={() => this.handleOpen()} label="Agregar" />}
                    />
                    <Dialog
                      title="Nuevo turno"
                      actions={actions}
                      modal={false}
                      open={this.state.open}
                      onRequestClose={(e) => this.handleClose(e)}>
                      <TextField hintText="Descripcion" id="dialog-text"/>
                      <DatePicker hintText="Fecha" id="dialog-date" />
                      <TimePicker hintText="Horario" id="dialog-time" format="24hr"/>
                    </Dialog>
                    <List style={style}>
                        <Subheader>Domingo 11</Subheader>
                        <ListItem
                          primaryText="14:30hs - Cliente Uno"
                          secondaryText="Necesidad principal"
                        />
                        <ListItem
                          primaryText="15:30hs - Cliente Dos"
                          secondaryText="Necesidad principal"
                        />
                    </List>
                    <List style={style}>
                        <Subheader>Lunes 12
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
                        <Subheader>Martes 13</Subheader>
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
                        <Subheader>Miercoles 14</Subheader>
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
                        <Subheader>Jueves 15</Subheader>
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
                        <Subheader>Viernes 16</Subheader>
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
                        <Subheader>Sabado 17</Subheader>
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