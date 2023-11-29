import React from 'react';
import { render, screen } from '@testing-library/react';
import SideHeadline from './SideHeadline';

test('renders headline', () => {
  render(<SideHeadline />);
  const headlineElement = screen.getByText(/titular/i);
  expect(headlineElement).toBeInTheDocument();
});
