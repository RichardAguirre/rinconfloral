import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer information', () => {
  render(<Footer />);
  const infoElement = screen.getByText(/información del footer/i);
  expect(infoElement).toBeInTheDocument();
});
