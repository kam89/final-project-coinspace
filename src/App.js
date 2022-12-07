import React from 'react';
import {
  Container,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { defaultThemes } from 'themes';
import { Home } from 'components/pages/home';
import { HistoricalPrice } from 'components/templates/historicalPrice';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { NavBar } from 'components/organisms/NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'HistoricalPrice/:id',
        element: <HistoricalPrice />,
      },
    ],
  },
]);

function App() {
  let theme = createTheme(defaultThemes);
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline enableColorScheme />
        <NavBar
          appName={'Coins Space'}
          description={'A Beginner Village for Just Starter'}
        />
        <Container maxWidth="xl">
          <RouterProvider router={router} />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
