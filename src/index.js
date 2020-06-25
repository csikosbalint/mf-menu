import Menu from './containers/Menu';
import { MANIFEST } from './integrations/MenuAPI';
if (false) {
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
    'var addDep = function() { setTimeout(() => {window.postMessage("start", "http://localhost:8080");}, 1000);}, 2000) }';

  window.document.body.appendChild(unpkgReact);
  window.document.body.appendChild(addDep);
  window.document.body.appendChild(unpkgReactDOM);
}
window.MF = true;
window.addEventListener(
  'message',
  (event) => {
    if (event.source.MF) {
      const msg = event.data;
      switch (msg.cmd) {
        case 'start': {
          const React = window.React;
          window.ReactDOM.render(<Menu />, document.getElementById('root'));
          let msg = { ...MANIFEST.communication.command };
          msg.cmd = 'done';
          event.source.postMessage(msg, `${window.location.href}`);
          break;
        }
        default: {
          console.log(event.data);
        }
      }
    }
  },
  false
);
