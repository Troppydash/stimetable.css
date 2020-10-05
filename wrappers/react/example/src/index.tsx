import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '@stimetable.css/react/lib';
import * as ThemeProvider from '@stimetable.css/react/lib/provider';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider.Provider theme={{
            primary: ThemeProvider.CreateColorPalette( "#b82832", "#9f222c", "#8f1f28", "white", '#bbb' ),
            secondary: ThemeProvider.CreateColorPalette( "#6b6b6b", "#5b5a5a", "#4c4c4c", "white", '#bbb' ),
            background: ThemeProvider.CreateColorPalette( "#282828", "#323232", "#3c3c3c", "white", '#bbb' ),
        }}>
            <App />
        </ThemeProvider.Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
