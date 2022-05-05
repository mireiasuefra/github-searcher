import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider} from '@primer/react'

ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
, document.getElementById('root'));
