/* eslint-disable import/extensions */
import React from 'react';

import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// app

import App from './App';

// styles

import UserContext from './Contexts/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContext>
            <App />
        </UserContext>
    </React.StrictMode>
);
