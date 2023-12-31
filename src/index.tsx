import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import '@/shared/config/i18n/i18n';
import './app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { Theme } from './shared/const/theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider initialTheme={Theme.DARK}>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
