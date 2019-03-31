import React, { Component } from 'react';
import classes from './App.css';
//import Radium, { StyleRoot } from "radium";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'a12', name: 'Jecho', age: 24},
      { id: 'b12', name: 'Vaughn', age: 24},
      { id: 'c12', name: 'Japo', age: 23}
    ],
    otherStart: 'nothing',
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log("nice");
    // NEVER DO THIS: this.state.persons[0].name = "Jericho Francis";
    this.setState({
      persons: [
        { name: 'Jericho Francis', age: 24},
        { name: 'Vaughn', age: 24},
        { name: 'Japo', age: 23}
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    // always let the original state stay
    const persons = [...this.state.persons]; //ES6
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    /*const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }*/

    let persons = null;
   

    if (this.state.showPersons) {
      persons = (
          <div>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          </div>
        )
        //style.backgroundColor = 'red';
        /*style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }*/

      };

    return (
      //<StyleRoot>
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          { persons }
        </div>
      //</StyleRoot>
    );
    // JSX is translated to below:
    //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Does this work know?'));
  }
}

export default App //Radium(App);
