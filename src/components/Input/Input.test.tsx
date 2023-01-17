import { render, screen } from 'test-utils';
import { Input } from './Input';

describe('Input', () => {
  test('renders Input without error correctly', () => {
    render(
      <Input
        type="text"
        name="description"
        label="Description label"
        value={'test description'}
        onChange={jest.fn()}
        error={''}
      />
    );
    const inputElement = screen.getByLabelText('Description label');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders Input with error', () => {
    render(
      <Input
        type="text"
        name="description"
        label="Description label"
        value={'test description'}
        onChange={jest.fn()}
        error={'test error message'}
      />
    );
    const inputElement = screen.getByLabelText('Description label');
    expect(inputElement).toBeInTheDocument();
    const errorElement = screen.getByText(/test error message/i);
    expect(errorElement).toBeInTheDocument();
  });
});
