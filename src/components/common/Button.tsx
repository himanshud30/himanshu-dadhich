import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-cream' | 'yugen';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  hasArrow?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  hasArrow = true,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-label uppercase text-xs transition-all duration-300 rounded-[2px] select-none group';

  const sizeStyles = {
    sm: 'px-4 py-2 text-[11px] gap-2',
    md: 'px-6 py-3.5 text-[12px] gap-2.5',
    lg: 'px-8 py-4 text-[13px] gap-3',
  };

  const variantStyles = {
    primary:
      'bg-dark text-cream hover:bg-sandstone hover:text-dark border border-dark hover:border-sandstone shadow-sm hover:shadow active:scale-[0.99]',
    secondary:
      'bg-sandstone text-dark hover:bg-dark hover:text-cream border border-sandstone hover:border-dark shadow-sm active:scale-[0.99]',
    ghost:
      'bg-transparent text-dark hover:text-sandstone border-b border-dark/30 hover:border-sandstone rounded-none px-0 py-1 hover:gap-3',
    'outline-cream':
      'bg-transparent text-cream border border-cream/40 hover:bg-cream hover:text-dark active:scale-[0.99]',
    yugen:
      'bg-dark text-cream hover:bg-cream hover:text-dark border border-dark/30 hover:border-dark shadow-sm pl-5 pr-2 py-2 text-[11px] rounded-full',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {hasArrow && variant === 'yugen' && (
        <span className="w-7 h-7 rounded-full bg-sandstone text-dark flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105">
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      )}
      {hasArrow && variant !== 'yugen' && variant !== 'ghost' && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}
