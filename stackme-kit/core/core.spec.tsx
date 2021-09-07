import React from 'react';
import { render } from '@testing-library/react';
import { BasicCore } from './core.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCore />);
  const rendered = getByText('hello from Core');
  expect(rendered).toBeTruthy();
});
