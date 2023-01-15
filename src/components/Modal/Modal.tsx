import classNames from 'classnames';
import { Button } from 'components/Button/Button';
import './modal.scss';

interface Props {
  children: any;
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  className?: string;
}

export const Modal = ({
  children,
  open,
  onCancel,
  onConfirm,
  title,
  className,
}: Props) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className={classNames('modal-container', {
        'model-opened': open,
        'model-closed': !open,
      })}
    >
      <div className={classNames('modal', className)}>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-content">{children}</div>
        <div className="modal-buttons-container">
          <Button className="modal-cancel-button" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="modal-confirm-button" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
