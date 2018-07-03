import React from 'react';

const withAClass = (WrappedComponent, className) => {
	return (props) => (
		<div>
			<WrappedComponent />
		</div>
	);
}

export default withAClass;