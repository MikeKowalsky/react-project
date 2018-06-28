import React from 'react';

import './Person.css';

// in input -> binding is in both ways, value change the state, 
// we listen the changes - onChange we update the state, 
// we can see in input the value from the beginning 	

const person = (props) => {
	return (
		<div className="Person">
			<p onClick = {props.click}>I'm {props.name} and I'm {props.age} years old.</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	)
}

export default person;