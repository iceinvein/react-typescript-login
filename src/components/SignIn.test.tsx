import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from './SignIn';

test('should render email, password and sign in button', () => {
  render(<SignIn />);

  const header = screen.getAllByText(/sign in/i)[0];
  const emailLabel = screen.getByLabelText(/Email Address/i);
  const emailInput = screen.getByTestId('email');
  const passwordLabel = screen.getByLabelText(/Password/i);
  const passwordInput = screen.getByTestId('password');
  const signInButton = screen.getByTestId('sign-in');

  expect(header).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
  expect(signInButton).toHaveTextContent(/Sign In/i);
});

test('should render remember me checkbox', () => {
  render(<SignIn />);

  const rememberMeLabel = screen.getByLabelText(/Remember me/i);
  const rememberMeInput = screen.getByTestId('remember-me');

  expect(rememberMeLabel).toBeInTheDocument();
  expect(rememberMeInput).toBeInTheDocument();
  expect(rememberMeInput).not.toBeChecked();
});

test('should render forgot password link', () => {
  render(<SignIn />);

  const forgotPasswordLink = screen.getByText(/forgot password/i);

  expect(forgotPasswordLink).toBeInTheDocument();
});

test('should render sign up link', () => {
  render(<SignIn />);

  const signUpLink = screen.getByText(/sign up/i);

  expect(signUpLink).toBeInTheDocument();
});
