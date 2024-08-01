import { Component, ErrorInfo, ReactNode, Suspense } from 'react';

import { PageErrorBanner } from 'widgets/PageErrorBanner';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // TODO: Send errors to error logger service or similar
    if (__IS_DEV__) {
      console.log('ErrorBoundary: ', { error, info });
    }
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageErrorBanner />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
