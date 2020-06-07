import React from 'react';
import MenuIntegration from '../integrations/MenuIntegration';
import { createMuiTheme, MuiThemeProvider, useTheme } from '@material-ui/core';
import { blue, yellow, red } from '@material-ui/core/colors';
import GreenButton from '../components/GreenButton';

export default function ConsumerA() {
  //   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //   const theme = React.useMemo(
  //     () =>
  //       createMuiTheme({
  //         palette: {
  //           type: prefersDarkMode ? 'dark' : 'light',
  //           primary: green,
  //         },
  //       }),
  //     [prefersDarkMode]
  //   );
  const theme = createMuiTheme({
    palette: {
      primary: yellow,
    },
  });
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <h2>The global theme is yellow</h2>
        <h3>MF Container:</h3>
        <GreenButton color={red} />
        <h3>MF Module:</h3>
        <MenuIntegration
          host="http://localhost:4000"
          name="Menu"
          id="1"
          theme={theme}
        />
      </MuiThemeProvider>
    </>
  );
}
