import Menu from './containers/Menu';
import React from 'react';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  const unpkgReact = window.document.createElement('script');
  unpkgReact.setAttribute(
    'src',
    'https://unpkg.com/react@16.13.1/umd/react.development.js'
  );

  const unpkgReactDOM = window.document.createElement('script');
  unpkgReactDOM.setAttribute(
    'src',
    'https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js'
  );

  unpkgReactDOM.setAttribute('onload', 'addDep()');
  const addDep = window.document.createElement('script');
  addDep.innerText =
    'var addDep = function() { setTimeout( () => {window.menuReactDOM = window.ReactDOM}, 2000) }';

  window.document.body.appendChild(unpkgReact);
  window.document.body.appendChild(addDep);
  window.document.body.appendChild(unpkgReactDOM);
}
let timeout = 10; // 5 seconds = 500ms x 10
let checkExist = setInterval(function () {
  if (window.menuReactDOM && window.menuReactDOM.render) {
    window.menuReactDOM.render(<Menu />, document.getElementById('root'));
    clearInterval(checkExist);
  }
  if (timeout < 0) {
  }
  timeout--;
}, 500);
