import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-sm font-medium transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase tracking-[0.15em] relative overflow-hidden group";
  
  const variants = {
    primary: "bg-bakery-200 text-bakery-900 hover:bg-white hover:text-bakery-900 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    secondary: "bg-bakery-800 text-bakery-100 hover:bg-bakery-700 border border-white/5",
    outline: "border border-bakery-200 text-bakery-200 hover:bg-bakery-200 hover:text-bakery-900",
    ghost: "text-bakery-100 hover:text-bakery-200 hover:bg-white/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {children}
      </span>
    </button>
  );
};