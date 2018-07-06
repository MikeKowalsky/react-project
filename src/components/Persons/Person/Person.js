import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withAClass from '../../../hoc/withAClass';

// in input -> binding is in both ways, value change the state, 
// we listen the changes - onChange we update the state, 
// we can see in input the value from the beginning 	

class Person extends Component {

	constructor (props) {
		super(props);
		this.inputElement = React.createRef();
	}

	componentDidMount(){
		if(this.props.position === 0){
			this.inputElement.current.focus();
		}
	}

	focus(){
		this.inputElement.current.focus();
	}

	render(){
		return (
			<Aux>
				<p onClick = {this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input
					ref={this.inputElement}
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name}/>
			</Aux>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default withAClass(Person, classes.Person);