import React, { Component } from 'react';

// const withAClass = (WrappedComponent, className) => {
// 	return (props) => (
// 		<div className={className}>
// 			<WrappedComponent {...props} />
// 		</div>
// 	);
// }

const withAClass = (WrappedComponent, className) => {
		const WithAClass = class extends Component {
			render (){
				return (
					<div className={className}>
						<WrappedComponent ref={this.props.forwardedRef} {...this.props} />
					</div>
				);
			}
		}

		return React.forwardRef((props, ref) => {
			return <WithAClass {...props} forwardedRef={ref} />
		})
	}

export default withAClass;