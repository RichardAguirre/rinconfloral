import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders article content', () => {
  render(<Article />);
  const contentElement = screen.getByText(/contenido del artículo/i);
  expect(contentElement).toBeInTheDocument();
});
