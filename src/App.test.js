import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the words To Do', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do/i);
  expect(linkElement).toBeInTheDocument();
});
