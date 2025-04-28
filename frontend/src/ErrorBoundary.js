import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-6">
          <h1 className="text-xl font-bold text-red-600">Une erreur est survenue :</h1>
          <pre className="mt-4 text-sm text-gray-800">{this.state.error.toString()}</pre>
          <pre className="mt-2 text-xs text-gray-600">{this.state.errorInfo.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 