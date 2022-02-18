import React from 'react';

import { createTheme, Stack, ThemeProvider } from '@mui/material';
import SignIn from './components/SignIn';
import ThemeSwitch from './components/ThemeSwitch';

export const ColorModeContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

function App(): JSX.Element {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Stack direction="row" justifyContent="flex-end" data-testid="stack">
          <ThemeSwitch />
        </Stack>
        <SignIn
          submit={(email, password, rememberMe) =>
            alert(JSON.stringify({ email, password, rememberMe }))
          }
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
