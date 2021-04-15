import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wikipedia link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wikipedia/i);
  expect(linkElement).toBeInTheDocument();
});
