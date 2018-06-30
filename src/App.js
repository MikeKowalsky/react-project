import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: 'sdasdqw', name: 'Mike', age: 34},
      {id: 'xczxczx', name: 'John', age: 33},
      {id: 'zdeffvb', name: 'Luke', age: 22}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { 
      // again do not mutate the state by takeing the reference - copy it
      ...this.state.persons[personIndex]
      // alternatively can use js method
      // const person = Object.assign({}, this.state.persons[personIndex])
    }

    //working on a copy of person
    person.name = event.target.value;

    //again copy of whole array
    const persons = [...this.state.persons];
    //and change
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //slice witout args simply create a copy of an element
    // without that I'm still mutate oryginal state during splicing
    // arrays and objects -> only the reference
    // first aproach:
    // const persons = this.state.persons.slice(); 
    // as an alternative I can use spread operator
    // to create new instance of the array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // w person -> need arrow function to use index 
  // w button  ->  second way to pass argument to a function, but this way can be inefficient
  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => {this.nameChangeHandler(event, person.id)}}
            />
          })}
        </div>
      );

      btnClass = classes.Red;

    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);

    }



    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          
          <button
            className={btnClass}
            onClick = {this.togglePersonsHandler}>Toggle persons</button>

          {persons}
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!!'));
  }
}

// export default Radium(App);
export default App;
