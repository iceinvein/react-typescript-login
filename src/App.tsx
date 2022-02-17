import React from 'react';

import { createTheme, Stack, ThemeProvider } from '@mui/material';
import SignIn from './components/SignIn';
import ThemeSwitch from './components/ThemeSwitch';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" justifyContent="flex-end">
        <ThemeSwitch />
      </Stack>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
