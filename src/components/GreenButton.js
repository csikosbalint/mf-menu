import React from 'react';
import classes from './GreenButton.module.css';
import './GreenButton.css';
import {
  MuiThemeProvider,
  useTheme,
  responsiveFontSizes,
  Button,
  createMuiTheme,
  Container,
} from '@material-ui/core';

export default function GreenButton(props) {
  const { green, blue } = window.MaterialUI.colors;

  // const {
  //   MuiThemeProvider,
  //   useTheme,
  //   responsiveFontSizes,
  //   Button,
  //   createMuiTheme,
  //   Container,
  // } = window.MaterialUI;

  const toggleColor = (theme) => {
    defaultTheme.palette.primary = blue;
  };
  let defaultTheme = useTheme();
  let customTheme = createMuiTheme({
    palette: {
      primary: props.color ? props.color : green,
    },
  });
  customTheme = responsiveFontSizes(customTheme);
  return (
    <>
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: 'lightgrey',
          margin: '1rem',
          width: '600px',
          height: '350px',
        }}
      >
        This is the same 3 Button React Component with MUI. Param color:
        {`${props.color ? props.color.A100 : 'none'}`}
        <MuiThemeProvider theme={customTheme}>
          <p>Customized theme</p>
          <Button variant="contained" color="primary">
            GREEN BUTTON
          </Button>
          <MuiThemeProvider theme={defaultTheme}>
            <p>Default theme</p>
            <Button variant="contained" color="primary" onClick={toggleColor}>
              DEFAULT BUTTON
            </Button>
          </MuiThemeProvider>
          <p>Customized CSS</p>
          <Button
            id="myLastbutton"
            className={classes.Button}
            variant="contained"
            color="primary"
          >
            GREEN AGAIN!!
          </Button>
        </MuiThemeProvider>
      </Container>
    </>
  );
}
