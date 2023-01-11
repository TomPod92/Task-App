import App from './App';
import { render, screen, userEvent } from 'test-utils';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click/i);
  expect(buttonElement).toBeInTheDocument();
});

test('div not to be in the document', async () => {
  render(<App />);
  const divElement = screen.queryByText(/i am here/i);
  expect(divElement).not.toBeInTheDocument();
});

test('div to be in the document after click', async () => {
  const user = userEvent.setup();
  render(<App />);
  const buttonElement = screen.getByText(/Click/i);
  await user.click(buttonElement);

  const divElement = await screen.findByTestId('test');
  expect(divElement).toBeInTheDocument();
});
