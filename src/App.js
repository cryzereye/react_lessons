
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)}/>;
            })}
          </div>
        )
      };

    return (
      // only 1 root element for JSX
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button
          onClick={() => this.togglePersonsHandler()}
          style={style} >
          {this.state.showPersons === true ? 'Hide' : 'Show'} Persons </button>
          { persons }
      </div>
    );
    // JSX is translated to below:
    //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Does this work know?'));
  }
}

export default App;
