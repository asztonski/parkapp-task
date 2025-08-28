import { useState } from 'react';
import GateButton from '../components/ui/button/GateButton';

type Gate = { id: string; label: string };

const gates: Gate[] = [
  { id: 'gate-main', label: 'Brama główna' },
  { id: 'gate-garage', label: 'Brama garażowa' },
  { id: 'barrier-entry', label: 'Szlaban wjazdowy' },
  { id: 'barrier-exit', label: 'Szlaban wyjazdowy' },
];

export default function Pilot() {
  const [activeId, setActiveId] = useState<string>(gates[0].id);

  return (
    <section className="py-4">
      <div className="ml-auto max-w-56">
        <h2 className="text-center font-semibold tracking-tight">Długa nazwa pilota</h2>
        <ul className="mt-4 flex flex-col gap-4">
          {gates.map(({ id, label }) => (
            <li key={id}>
              <GateButton
                label={label}
                isActive={activeId === id}
                onClick={() => setActiveId(id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
