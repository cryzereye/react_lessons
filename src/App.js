
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jecho', age: 24},
      { name: 'Vaughn', age: 24},
      { name: 'Japo', age: 23}
    ]
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

  render() {
    return (
      // only 1 root element for JSX
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> and my hobby is nothing! </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
     </div>
    );
    // JSX is translated to below:
    //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Does this work know?'));
  }
}

export default App;
