import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { configureStore } from './js/redux/store';

import './css/style.css'

import App from './js/containers/app';

const store = configureStore({});
const data = 'data';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Redirect exact from='/' to={`/${data}`} />
                <Route path="/:data" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('react-container')
);
