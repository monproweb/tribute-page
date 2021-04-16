import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wikipedia link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wikipedia/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders author name', () => {
  render(<App />);
  expect(screen.getByText('Martin Luther King Jr.')).toBeInTheDocument();
});