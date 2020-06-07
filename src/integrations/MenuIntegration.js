import React from 'react';
import { useTheme } from '@material-ui/core';

class MenuIntegration extends React.Component {
  componentDidMount() {
    const { name, host, document, id } = this.props;
    const scriptId = `micro-frontend-script-${name}-${id}`;

    if (document.getElementById(scriptId)) {
      // this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        console.log(manifest);
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentWillUnmount() {
    const { name, window, id } = this.props;

    window[`unmount${name}`](`${name}-container-${id}`);
  }

  renderMicroFrontend = () => {
    const { name, window, id, theme } = this.props;
    // MF API
    window[`render${name}`](`${name}-container-${id}`, theme);
  };

  render() {
    return <div id={`${this.props.name}-container-${this.props.id}`} />;
  }
}

MenuIntegration.defaultProps = {
  document,
  window,
};

export default MenuIntegration;
