import React from 'react';
import Integration from '../integrations/Integration';

import GreenButton from '../components/GreenButton';

export default function ConsumerA() {
  const { createMuiTheme, MuiThemeProvider, Container } = window.MaterialUI;
  const { yellow, red } = window.MaterialUI.colors;

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
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: 'lightgreen',
          padding: '1rem',
        }}
      >
        <h2>The global theme is yellow</h2>
        <MuiThemeProvider theme={theme}>
          <h3>MF Container:</h3>
          <GreenButton color={red} />
          <h3>MF Module:</h3>
          <Integration
            host="http://localhost:4000"
            name="Menu"
            id="1"
            theme={theme}
          />
        </MuiThemeProvider>
      </Container>
    </>
  );
}
