
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jecho', age: 24},
      { name: 'Vaughn', age: 24},
      { name: 'Japo', age: 23}
    ],
    otherStart: 'nothing',
    showPersons: false
  }

  switchNameHandler = () => {
    //console.log("nice");
    // NEVER DO THIS: this.state.persons[0].name = "Jericho Francis";
    this.setState({
      persons: [
        { name: 'Jericho Francis', age: 24},
        { name: 'Vaughn', age: 24},
        { name: 'Japo', age: 23}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jecho', age: 24},
        { name: event.target.value, age: 24},
        { name: 'Japo', age: 23}
      ]
    });
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
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this, 'Jecho')}
              changed = {this.nameChangedHandler}> and my hobby is nothing! </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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
