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
import { saveCalendarEvent } from './actions';
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
        let eventDate = new Date(date)
        eventDate.setDate(eventDate.getDate() + 1)
        this.props.saveCalendarEvent({
          text: text,
          date: eventDate,
          time: time
        })
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
        frdy.setDate(frdy.getDate() - frdy.getDay() + this.state.position);
        
        var scdy = new Date(frdy.getTime());
        var trdy = new Date(frdy.getTime());
        var crdy = new Date(frdy.getTime());
        var qtdy = new Date(frdy.getTime());
        var sxdy = new Date(frdy.getTime());
        var spdy = new Date(frdy.getTime());
        
        scdy.setDate(scdy.getDate() + 1);
        trdy.setDate(trdy.getDate() + 2);
        crdy.setDate(crdy.getDate() + 3);
        qtdy.setDate(qtdy.getDate() + 4);
        sxdy.setDate(sxdy.getDate() + 5);
        spdy.setDate(spdy.getDate() + 6);

        var firstDayEvents = [];
        var secondDayEvents = [];
        var thirdDayEvents = [];
        var fourthDayEvents = [];
        var fifthDayEvents = [];
        var sixhtDayEvents = [];
        var seventhDayEvents = [];

        for (var i = this.props.events.length - 1; i >= 0; i--) {
          let event = this.props.events[i];
          console.log(event);
          switch(event.date.toDateString()){
            case frdy.toDateString():
              firstDayEvents.push(event);
              break;
            case scdy.toDateString():
              secondDayEvents.push(event);
              break;
            case trdy.toDateString():
              thirdDayEvents.push(event);
              break;
            case crdy.toDateString():
              fourthDayEvents.push(event);
              break;
            case qtdy.toDateString():
              fifthDayEvents.push(event);
              break;
            case sxdy.toDateString():
              sixhtDayEvents.push(event);
              break;
            case spdy.toDateString():
              seventhDayEvents.push(event);
              break;
          }


        }

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
                        <ToolbarTitle text={"Semana del " + frdy.getDate() + "/" + (frdy.getMonth() + 1)  + "/" + frdy.getFullYear() + " al " + spdy.getDate() + "/" + (spdy.getMonth() + 1)  + "/" + frdy.getFullYear()} />
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
                        { firstDayEvents.map( event  => <ListItem primaryText={event.date.toDateString()} secondaryText={event.text} />) }
                    </List>
                    <List style={style}>
                        <Subheader>Lunes {scdy.getDate()}</Subheader>
                        { secondDayEvents.map( event  => <ListItem primaryText={event.date.toDateString()} secondaryText={event.text} />) }
                    </List>
                    <List style={style}>
                        <Subheader>Martes {trdy.getDate()}</Subheader>
                        { thirdDayEvents.map( event  => <ListItem primaryText={event.date.toDateString()} secondaryText={event.text} />) }
                    </List>
                    <List style={style}>
                        <Subheader>Miercoles {crdy.getDate()}</Subheader>
                        { fourthDayEvents.map( event  => <ListItem primaryText={event.date.toDateString()} secondaryText={event.text} />) }
                    </List>
                    <List style={style}>
                        <Subheader>Jueves {qtdy.getDate()}</Subheader>
                        { fifthDayEvents.map( event  => <ListItem primaryText={event.date.toDateString()} secondaryText={event.text} />) }
                    </List>
                    <List style={style}>
                        <Subheader>Viernes {sxdy.getDate()}</Subheader>
                        { sixhtDayEvents.map( event  => <ListItem primaryText={event.date.toDateString()} secondaryText={event.text} />) }
                    </List>
                    <List style={style}>
                        <Subheader>Sabado {spdy.getDate()}</Subheader>
                        { seventhDayEvents.map( event  => <ListItem primaryText={event.date.toDateString} secondaryText={event.text} />) }
                    </List>
            </div>
                      
            </MuiThemeProvider> 
            )
    }
}


export default connect( state => state, {saveCalendarEvent})(ShiftSystem);