import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import TwitchAPIApp from './TwitchAPIApp'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './app/store';
import { HashRouter as Router, Route } from 'react-router-dom'

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={TwitchAPIApp} />
        </Router>
    </Provider>,
    rootElement
);
