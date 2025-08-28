import React from 'react';

type DotButtonProps = {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string; // aria-label
  size?: 'sm' | 'md' | 'lg'; // rozmiar kropki
};

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
      className={`h-[22px] w-[22px] rounded-full shadow transition-colors duration-200 ease-in-out outline-none ${isActive ? 'bg-foreground' : 'bg-white hover:bg-slate-400'} focus-visible:ring-foreground focus-visible:ring-2 ${className} `}
    />
  );
}
