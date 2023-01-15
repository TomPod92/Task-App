import classNames from 'classnames';
import './button.scss';

interface Props {
  children: any;
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
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
        'button-primary': variant === 'primary',
        'button-secondary': variant === 'secondary',
      })}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
