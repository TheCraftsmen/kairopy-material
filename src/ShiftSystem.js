/* eslint-disable */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
        this.state = {open: false, position: 0};
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

    setLastWeek(){
      this.setState({position: this.state.position - 7})
    }

    setNextWeek(){
      this.setState({position: this.state.position + 7})
    }

    render(){
        const actions = [
          <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => this.handleClose()}
          />,
        ];
        var frdy = new Date();
        if(frdy.getDay() > 0)
          frdy.setDate(frdy.getDate() - frdy.getDay() + this.state.position);
        var scdy = new Date(frdy.getTime());
        scdy.setDate(scdy.getDate() + 1);
        
        var trdy = new Date(frdy.getTime());
        trdy.setDate(trdy.getDate() + 2);
        
        var crdy = new Date(frdy.getTime());
        crdy.setDate(crdy.getDate() + 3);
        
        var qtdy = new Date(frdy.getTime());
        qtdy.setDate(qtdy.getDate() + 4);
        
        var sxdy = new Date(frdy.getTime());
        sxdy.setDate(sxdy.getDate() + 5);
        
        var spdy = new Date(frdy.getTime());
        spdy.setDate(spdy.getDate() + 6);
        return(
            <MuiThemeProvider>  
            <div>
                    <AppBar
                        className={"kairopy"}
                        title="kairopy.com"
                        iconElementRight={<FlatButton onTouchTap={() => this.handleOpen()} label="Agregar" />}
                    />
                    <Toolbar>
                      <ToolbarGroup>
                        <ToolbarTitle text={"Semana del " + frdy.getDate() + "/" + frdy.getMonth() + "/" + frdy.getFullYear() + " al " + spdy.getDate() + "/" + spdy.getMonth() + "/" + frdy.getFullYear()} />
                      </ToolbarGroup>
                      <ToolbarGroup>
                        <RaisedButton onTouchTap={() => this.setLastWeek()} label="anterior" />
                        <RaisedButton onTouchTap={() => this.setNextWeek()} label="siguiente" />
                      </ToolbarGroup>
                    </Toolbar>
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
                        <Subheader>Domingo {frdy.getDate()}</Subheader>
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
                        <Subheader>Lunes {scdy.getDate()}
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
                        <Subheader>Martes {trdy.getDate()}</Subheader>
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
                        <Subheader>Miercoles {crdy.getDate()}</Subheader>
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
                        <Subheader>Jueves {qtdy.getDate()}</Subheader>
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
                        <Subheader>Viernes {sxdy.getDate()}</Subheader>
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
                        <Subheader>Sabado {spdy.getDate()}</Subheader>
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