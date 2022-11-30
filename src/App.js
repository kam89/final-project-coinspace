import React from 'react';
import {
  Container,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { defaultThemes } from 'themes';
import { Home } from 'components/templates/home';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  let theme = createTheme(defaultThemes);
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline enableColorScheme />
        <Container maxWidth="lg">
          <Home />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
