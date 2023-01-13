import React from 'react';
import './button.scss';

interface Props {
  children: any;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ children, onClick, disabled, className }: Props) => {
  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
