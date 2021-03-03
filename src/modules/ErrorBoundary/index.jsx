import PropTypes from 'prop-types';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: {},
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
      errorMsg: {
        error,
        info,
      },
    });
  }

  render() {
    const { hasError, errorMsg } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{errorMsg.info}</p>
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: [],
};

ErrorBoundary.propTypes = {
  children: PropTypes.array,
};

export default ErrorBoundary;
