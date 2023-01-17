import { render, screen } from 'test-utils';
import { Button } from './Button';

describe('Button', () => {
  test('Renders Button correctly', () => {
    render(
      <Button>
        <p>Click</p>
      </Button>
    );

    const buttonElement = screen.getByRole('button', {
      name: /click/i,
    });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button-primary');
  });

  test('Renders Button with correct props', async () => {
    render(
      <Button variant="secondary" disabled className="testClass">
        Click
      </Button>
    );

    const buttonElement = screen.getByRole('button', {
      name: /click/i,
    });

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('button-secondary');
  });
});
