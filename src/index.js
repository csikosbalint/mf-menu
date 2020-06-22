import Menu from './containers/Menu';
console.log(process.env);
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
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
console.log(`index.js`);
window.addEventListener(
  'message',
  (event) => {
    console.log(event);
    if (event.data !== 'start') return;
    const React = window.React;
    window.ReactDOM.render(<Menu />, document.getElementById('root'));
  },
  false
);
