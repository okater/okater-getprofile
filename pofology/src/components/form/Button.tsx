import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, disabled = false, onClick }) => {
  return (
    <button 
      type={type} 
      className={classNames(['btn', className])} 
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
