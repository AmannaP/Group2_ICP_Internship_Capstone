import React from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 active:bg-primary-700 disabled:bg-primary-300',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500 active:bg-secondary-700 disabled:bg-secondary-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500 active:bg-accent-700 disabled:bg-accent-300',
    outline: 'border border-surface-300 dark:border-surface-600 bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-surface-500',
    ghost: 'bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-surface-100 focus:ring-surface-500',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
};