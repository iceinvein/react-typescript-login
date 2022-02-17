import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ThemeSwitch from './ThemeSwitch';

test('should render theme toggle', async () => {
  render(<ThemeSwitch />);

  await waitFor(() => {
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });
});
