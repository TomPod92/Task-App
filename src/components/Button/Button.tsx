import classNames from 'classnames';
import './button.scss';

interface Props {
  children: any;
  version?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  version = 'primary',
  onClick,
  type = 'button',
  disabled,
  className,
}: Props) => {
  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event);
  };

  return (
    <button
      type={type}
      className={classNames('button', className, {
        'button-primary': version === 'primary',
        'button-secondary': version === 'secondary',
      })}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
