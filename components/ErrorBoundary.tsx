import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-theme-light dark:bg-theme-dark p-6">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-serif font-bold text-theme-dark dark:text-theme-light mb-4">Something went wrong.</h2>
            <p className="text-theme-dark/70 dark:text-theme-light/70 mb-8">
              We apologize for the inconvenience. Please try refreshing the page or contact Davor's office if the issue persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-theme-accent text-white font-bold rounded-lg shadow-lg"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    // FIX: Access children property through this.props in class components
    return this.props.children;
  }
}

export default ErrorBoundary;