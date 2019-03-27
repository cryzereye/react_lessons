
import React, { Component } from 'react';
import classes from './App.css';
//import Radium, { StyleRoot } from "radium";
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}><Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed = {(event) => this.nameChangedHandler(event, person.id)}/></ErrorBoundary>;
            })}
          </div>
        )
        //style.backgroundColor = 'red';
        /*style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }*/
        btnClass = classes.Red;
      };

    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // push is array appened
    }

    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }


    return (
      //<StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I'm a React app</h1>
          <p className = {assignedClasses.join(' ')}> This is really working!</p>
          <button
            className={btnClass}
            onClick={() => this.togglePersonsHandler()}
            //style={style} 
          >
            {this.state.showPersons === true ? 'Hide' : 'Show'} Persons </button>
            { persons }
        </div>
      //</StyleRoot>
    );
    // JSX is translated to below:
    //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Does this work know?'));
  }
}

export default App //Radium(App);
