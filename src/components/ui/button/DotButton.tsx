import React from 'react';

type DotButtonProps = {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string; // aria-label
  size?: 'sm' | 'md' | 'lg'; // rozmiar kropki
};

const sizeMap = {
  sm: 'h-2.5 w-2.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
} as const;

export default function DotButton({
  isActive = false,
  onClick,
  className = '',
  label = 'Change page',
  size = 'md',
}: DotButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={isActive}
      className={` ${sizeMap[size]} rounded-full transition-colors duration-200 ease-in-out outline-none ${isActive ? 'bg-foreground' : 'bg-slate-300 hover:bg-slate-400'} focus-visible:ring-foreground focus-visible:ring-2 ${className} `}
    />
  );
}
