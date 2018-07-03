import React, { Component } from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withAClass from '../../../hoc/withAClass';

// in input -> binding is in both ways, value change the state, 
// we listen the changes - onChange we update the state, 
// we can see in input the value from the beginning 	

class Person extends Component {
	render(){
		return (
			<Aux>
				<p onClick = {this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name}/>
			</Aux>
		)
	}
}

export default withAClass(Person, classes.Person);