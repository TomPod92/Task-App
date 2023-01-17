import { render, screen } from 'test-utils';
import { Modal } from './Modal';

describe('Modal', () => {
  test('does not render modal if ISOPEN is false', () => {
    render(
      <Modal
        isOpen={false}
        title="Modal title"
        confirmButtonText="Yes"
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
      >
        <p>Modal content</p>
      </Modal>
    );
    const modalElement = screen.queryByTestId('modal');
    expect(modalElement).not.toBeInTheDocument();
  });

  test('render modal correctly', () => {
    render(
      <Modal
        isOpen={true}
        title="Modal title"
        confirmButtonText="Yes"
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
      >
        <p>Modal content</p>
      </Modal>
    );

    const titleElement = screen.getByText(/Modal title/i);
    expect(titleElement).toBeInTheDocument();
  });
});
