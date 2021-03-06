import * as React from 'react';
import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary';

class PageContainer extends React.Component {
    render () {
        return (
            <React.Fragment>
                <ErrorBoundary>
                    <Routes />
                </ErrorBoundary>
            </React.Fragment>
        );
    }
}

export default PageContainer;
