import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './containers/Main';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
