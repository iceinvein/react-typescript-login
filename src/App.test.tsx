import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should toggle theme', async () => {
  render(<App />);

  const themeToggle = screen.getByRole('switch');

  userEvent.click(themeToggle);

  expect(themeToggle).toBeChecked();
});
