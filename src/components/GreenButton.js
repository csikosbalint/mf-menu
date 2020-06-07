import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core';
import { green, blue } from '@material-ui/core/colors';
import {
  MuiThemeProvider,
  useTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

export default function GreenButton(props) {
  let defaultTheme = useTheme();
  let customTheme = createMuiTheme({
    palette: {
      primary: props.color ? props.color : green,
    },
  });
  customTheme = responsiveFontSizes(customTheme);
  return (
    <>
      <MuiThemeProvider theme={customTheme}>
        <p>Customized theme</p>
        <Button variant="contained" color="primary">
          GREEN BUTTON
        </Button>
      </MuiThemeProvider>
      <MuiThemeProvider theme={defaultTheme}>
        <p>Default theme</p>
        <Button variant="contained" color="primary">
          DEFAULT BUTTON
        </Button>
      </MuiThemeProvider>
      <MuiThemeProvider theme={customTheme}>
        <p>Again customized</p>
        <Button variant="contained" color="primary">
          GREEN AGAIN!!
        </Button>
      </MuiThemeProvider>
    </>
  );
}
