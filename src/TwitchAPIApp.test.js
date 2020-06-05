import React from 'react';
import ReactDOM from 'react-dom';
import TwitchAPIApp from './TwitchAPIApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TwitchAPIApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
