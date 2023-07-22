import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import { CustomThemeProvider } from './app/providers/CustomThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <CustomThemeProvider>
            <App />
        </CustomThemeProvider>
    </React.StrictMode>,
);
