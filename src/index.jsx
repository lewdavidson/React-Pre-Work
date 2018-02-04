// standard JS
// var heading = React.createElement('h1', {}, 'Help Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = ('h3', {}, 'Amy and Lew');
// var ticketIssue = ('h3', {}, 'They cant stop making out long enough to do homework');
//
// var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);
//
// ReactDOM.render(
//   app,
//   document.getElementById('react-app-root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
