type GateButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function GateButton({
  label,
  isActive = false,
  onClick,
  className = '',
  type = 'button',
}: GateButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-pressed={isActive}
      className={`font-button w-full rounded-xl border-2 p-3 text-center leading-none transition-all duration-200 ease-in-out outline-none select-none ${
        isActive
          ? 'bg-foreground text-soft-white border-transparent'
          : 'bg-soft-white text-foreground border-foreground'
      } focus-visible:bg-foreground focus-visible:text-soft-white focus-visible:ring-foreground focus-visible:ring-offset-soft-white focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 ${className} `}
    >
      {label}
    </button>
  );
}
