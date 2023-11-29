import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders navigation links', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/inicio/i);
  expect(linkElement).toBeInTheDocument();
});
