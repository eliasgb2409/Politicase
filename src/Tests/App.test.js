import { render, screen } from '@testing-library/react';
import App from '../App';

test('App renders successfully', () => {
  render(<App />);
  const headerElement = screen.getByText(/Politibiler/);
  expect(headerElement).toBeInTheDocument();
});

