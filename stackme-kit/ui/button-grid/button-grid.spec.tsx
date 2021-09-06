import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonGrid } from './button-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButtonGrid />);
  const rendered = getByText('hello from ButtonGrid');
  expect(rendered).toBeTruthy();
});
