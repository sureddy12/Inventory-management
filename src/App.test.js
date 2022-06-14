import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('renders learn react link', () => {
  const { getByText, getByTestId } = render(<App />);
  const linkElement = getByTestId("App heropage");
  expect(linkElement).toBeInTheDocument();
});
