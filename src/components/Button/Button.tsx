import React from 'react';
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

  const classString = `button button-${version} ${className}`;

  return (
    <button
      type={type}
      className={classString}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
