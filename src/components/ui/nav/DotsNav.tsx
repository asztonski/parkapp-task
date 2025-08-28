import DotButton from '../button/DotButton';

type DotsNavProps = {
  /** Liczba kropek (domyślnie 4) */
  count?: number;
  /** Indeks aktywnej kropki (0-based) */
  current?: number;
  /** Zmiana aktywnej kropki */
  onChange?: (index: number) => void;
  /** Dodatkowe klasy kontenera */
  className?: string;
  /** Rozmiar kropek */
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
