import React from 'react';
import * as RD from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { create } from 'jss';
import Microfrontend from './contracts/Microfrontend';
import { StylesProvider, jssPreset } from '@material-ui/core';
// Thank you! https://stackoverflow.com/questions/57984666/reactjs-material-ui-clickawaylistener-is-not-working-properly-in-the-shadow
window.renderMenu = (containerId, containerTheme, mainCssUrl) => {
  const shadowRoot = document
    .getElementById(containerId)
    .attachShadow({ mode: 'closed' });
  // https://w3c.github.io/webcomponents/spec/shadow/#inertness-of-html-elements-in-a-shadow-tree
  const stylesheet = document.createElement('link');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('href', mainCssUrl);
  shadowRoot.appendChild(stylesheet);

  // <script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.development.js"></script>
  const reactdom = document.createElement('script');
  shadowRoot.appendChild(reactdom);

  const div = document.createElement('div');
  div.setAttribute('id', `root-${containerId}`);

  const reactRoot = shadowRoot.appendChild(div);
  const jss = create({ ...jssPreset(), insertionPoint: reactRoot });
  RD.render(
    <StylesProvider jss={jss}>
      <Microfrontend theme={containerTheme} />
    </StylesProvider>,
    div
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

window.unmountMenu = (containerId) => {
  console.log('umount' + containerId);
  RD.unmountComponentAtNode(document.getElementById(`root-${containerId}`));
};
