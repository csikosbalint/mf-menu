import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { create } from 'jss';
import { jssPreset, StylesProvider } from '@material-ui/styles';
import GreenButton from './components/GreenButton';
import retargetEvents from 'react-shadow-dom-retarget-events';

// Thank you! https://stackoverflow.com/questions/57984666/reactjs-material-ui-clickawaylistener-is-not-working-properly-in-the-shadow
window.renderMenu = (containerId, conainerTheme) => {
  const shadowRoot = document
    .getElementById(containerId)
    .attachShadow({ mode: 'closed' });
  const div = document.createElement('div');
  div.setAttribute('id', `root-${containerId}`);
  const reactRoot = shadowRoot.appendChild(div);
  const jss = create({ ...jssPreset(), insertionPoint: reactRoot });

  const newDefaultTheme = createMuiTheme();
  ReactDOM.render(
    <>
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={conainerTheme}>
          <GreenButton />
        </MuiThemeProvider>
      </StylesProvider>
    </>,
    reactRoot
  );
  retargetEvents(shadowRoot);
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

window.unmountMenu = (containerId) => {
  console.log('umount' + containerId);
  //   ReactDOM.unmountComponentAtNode(
  //     document.getElementById(`root-${containerId}`)
  //   );
};
