import { render, screen } from 'test-utils';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  test('renders RadioButton correctly', () => {
    render(
      <RadioButton
        name="testName"
        label="test radio button label"
        value={1}
        checked={true}
        onChange={jest.fn()}
      />
    );
    const radioElement = screen.getByRole('radio');
    const paragraphElement = screen.getByText('test radio button label');
    expect(radioElement).toBeInTheDocument();
    expect(radioElement).toBeChecked();
    expect(paragraphElement).toBeInTheDocument();
  });
});
