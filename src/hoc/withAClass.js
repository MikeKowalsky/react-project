import React from 'react';

const withAClass = (WrappedComponent, className) => {
	return (props) => (
		<div className={className}>
			<WrappedComponent />
		</div>
	);
}

export default withAClass;