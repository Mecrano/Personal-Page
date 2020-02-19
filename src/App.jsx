import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import App from './components/app';

const history = createBrowserHistory();

// Initialize google analytics page view tracking

ReactGA.initialize('UA-158782690-1');
history.listen((location) => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(<App history={history} />, document.getElementById('app'));
