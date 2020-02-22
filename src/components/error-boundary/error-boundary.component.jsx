import React, { Component } from 'react';

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  // Get error message of its children
  static getDerivedStateFromError(error) {

    // return object presenting new state
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <div> Something went wrong </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;