import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = null;
  let assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2){
    assignedClasses.push(classes.red); // push is array appened
  }

  if (props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
      <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className = {assignedClasses.join(' ')}> This is really working!</p>
      <button
          className={btnClass}
          onClick={props.clicked}
          //style={style} 
      >
          {props.showPersons === true ? 'Hide' : 'Show'} Persons </button>
      </div>
  );
};

export default cockpit;