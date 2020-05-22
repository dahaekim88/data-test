import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    console.log(error.toString(), info.componentStack);
    // this.logErrorToServices(error.toString(), info.componentStack);
  }
  // A fake logging service 😬

  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
