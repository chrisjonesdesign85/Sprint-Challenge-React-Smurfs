import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'; //importing the things I need to make the app work!!
import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
