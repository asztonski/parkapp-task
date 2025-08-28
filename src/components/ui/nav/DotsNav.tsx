import DotButton from '../button/DotButton';

type DotsNavProps = {
  count?: number;
  current?: number;
  onChange?: (index: number) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function DotsNav({
  count = 4,
  current = 0,
  onChange,
  className = '',
  size = 'md',
}: DotsNavProps) {
  const dots = Array.from({ length: count });

  return (
    <nav aria-label="Pilot pagination" className={className}>
      <ul className="flex items-center justify-center gap-10">
        {dots.map((_, i) => (
          <li key={i}>
            <DotButton
              size={size}
              isActive={i === current}
              label={`Go to page ${i + 1}`}
              onClick={() => onChange?.(i)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
