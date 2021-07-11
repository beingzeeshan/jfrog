import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		// TODO: Error log service
		// eslint-disable-next-line no-console
		console.log(`error: ${error} - errorInfo: ${errorInfo}`);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.element
};

export default ErrorBoundary;
