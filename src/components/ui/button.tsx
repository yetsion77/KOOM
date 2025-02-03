import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-200';
  const variantStyles = variant === 'outline' 
    ? 'border-2 border-current hover:bg-gray-100' 
    : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 
