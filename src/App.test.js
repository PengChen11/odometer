import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('render header', () => {
  const { getByText } = render(<App />);

  expect(getByText('Welcome')).toBeInTheDocument();
})