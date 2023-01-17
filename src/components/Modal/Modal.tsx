import classNames from 'classnames';
import { Button } from 'components/Button/Button';
import './modal.scss';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  confirmButtonText: string;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  className?: string;
}

export const Modal = ({
  children,
  isOpen,
  confirmButtonText,
  onCancel,
  onConfirm,
  title,
  className,
}: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={classNames('modal-container', {
        'model-opened': isOpen,
        'model-closed': !isOpen,
      })}
      onClick={onCancel}
      data-testid="modal"
    >
      <div
        className={classNames('modal', className)}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-content">{children}</div>
        <div className="modal-buttons-container">
          <Button className="modal-cancel-button" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className="modal-confirm-button"
            variant="secondary"
            onClick={onConfirm}
          >
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
