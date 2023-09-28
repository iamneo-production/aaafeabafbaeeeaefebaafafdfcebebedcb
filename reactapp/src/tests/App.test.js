import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders_stone_word', () => {
  render(<App />);
  const stoneElements = screen.getAllByText(/stone/i);
  expect(stoneElements.length).toBeGreaterThan(0);
});

test('renders_paper_word', () => {
  render(<App />);
  const paperElements = screen.getAllByText(/paper/i);
  expect(paperElements.length).toBeGreaterThan(0);
});

test('renders_scissors_word', () => {
  render(<App />);
  const scissorsElements = screen.getAllByText(/scissors/i);
  expect(scissorsElements.length).toBeGreaterThan(0);
});

test('renders_stone_button', () => {
  render(<App />);
  const stoneButton = screen.getByRole('button', { name: /stone/i });
  expect(stoneButton).toBeInTheDocument();
});

test('renders_paper_button', () => {
  render(<App />);
  const paperButton = screen.getByRole('button', { name: /paper/i });
  expect(paperButton).toBeInTheDocument();
});

test('renders_scissors_button', () => {
  render(<App />);
  const scissorsButton = screen.getByRole('button', { name: /scissors/i });
  expect(scissorsButton).toBeInTheDocument();
});