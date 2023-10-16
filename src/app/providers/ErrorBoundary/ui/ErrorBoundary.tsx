import React, { Suspense, type ErrorInfo, type ReactNode } from 'react';
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null,
    errorInfo?: ErrorInfo | null
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }
  
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { 
            hasError: true,
            error
        };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        this.setState({
            error,
            errorInfo
        })
    }
  
    render(): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError === true) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }
  
        return children; 
    }
}

export default ErrorBoundary;