import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Main from '../containers/Main';
export default function Microfrontend(props) {
  /*copy theme jss as received and processed as shadow dom styles */
  return (
    <ThemeProvider theme={props.theme}>
      <Main />
    </ThemeProvider>
  );
}
