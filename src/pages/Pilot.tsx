import { useState } from 'react';
import GateButton from '../components/ui/button/GateButton';
import DotsNav from '../components/ui/nav/DotsNav';

type Gate = { id: string; label: string };

const gates: Gate[] = [
  { id: 'gate-main', label: 'Brama główna' },
  { id: 'gate-garage', label: 'Brama garażowa' },
  { id: 'barrier-entry', label: 'Szlaban wjazdowy' },
  { id: 'barrier-exit', label: 'Szlaban wyjazdowy' },
];

export default function Pilot() {
  const [activeId, setActiveId] = useState<string>(gates[0].id);
  const [page, setPage] = useState<number>(0); // aktywna kropka (paginacja)

  return (
    <section className="py-4">
      <div></div>

      <div className="ml-auto max-w-60">
        <h2 className="text-center font-semibold tracking-tight">Długa nazwa pilota</h2>
        <ul className="mt-8 flex flex-col gap-4">
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
        <p className="mt-12">Wybierz bramę by otworzyć</p>
      </div>
      <DotsNav count={4} current={page} onChange={setPage} className="mt-20" />
    </section>
  );
}
