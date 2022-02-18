import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from './SignIn';

const submit = jest.fn();

const setup = (): void => {
  render(<SignIn submit={submit} />);
};

test('should render email, password and sign in button', () => {
  setup();

  const header = screen.getAllByText(/sign in/i)[0];
  const email = screen.getByLabelText(/Email Address/i);
  const password = screen.getByLabelText(/Password/i);
  const signInButton = screen.getAllByText(/sign in/i)[1];

  expect(header).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
});

test('should render remember me checkbox', () => {
  setup();

  const rememberMe = screen.getByLabelText(/Remember me/i);

  expect(rememberMe).toBeInTheDocument();
  expect(rememberMe).not.toBeChecked();
});

test('should render forgot password link', () => {
  setup();

  const forgotPasswordLink = screen.getByText(/forgot password/i);

  expect(forgotPasswordLink).toBeInTheDocument();
});

test('should render sign up link', () => {
  setup();

  const signUpLink = screen.getByText(/sign up/i);

  expect(signUpLink).toBeInTheDocument();
});

test('should send the username and password entered on submit', () => {
  const submitLogin = jest.fn();
  render(<SignIn submit={submitLogin} />);

  const emailInput = screen.getByLabelText(/Email Address/i);
  const passwordInput = screen.getByLabelText(/Password/i);
  const rememberMeInput = screen.getByLabelText(/Remember me/i);
  const signInButton = screen.getAllByText(/Sign In/i)[1];

  userEvent.type(emailInput, 'test');
  userEvent.type(passwordInput, 'test');
  userEvent.click(rememberMeInput);
  userEvent.click(signInButton);

  expect(submitLogin).toHaveBeenCalledTimes(1);
  expect(submitLogin).toHaveBeenCalledWith('test', 'test', true);
});
