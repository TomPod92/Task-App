import React from 'react';
import './button.scss';

interface Props {
  children: any;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
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
      className={`button ${className}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
