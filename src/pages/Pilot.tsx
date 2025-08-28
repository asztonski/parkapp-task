import { useEffect, useMemo, useState } from 'react';
import GateButton from '../components/ui/button/GateButton';
import DotsNav from '../components/ui/nav/DotsNav';
import { gates } from '../data/gates'; // gates: Gate[][]

export default function Pilot() {
  const [page, setPage] = useState<number>(0);
  const currentGates = useMemo(() => gates[page] ?? [], [page]);
  const [activeId, setActiveId] = useState<string>(currentGates[0]?.id ?? '');

  useEffect(() => {
    if (!currentGates.some((g) => g.id === activeId)) {
      setActiveId(currentGates[0]?.id ?? '');
    }
  }, [page, currentGates, activeId]);

  return (
    <section className="py-4">
      <div></div>

      <div className="ml-auto max-w-60">
        <h2 className="text-center font-semibold tracking-tight">Długa nazwa pilota</h2>
        <ul className="mt-8 flex flex-col gap-5">
          {currentGates.map(({ id, label }) => (
            <li key={id}>
              <GateButton
                label={label}
                isActive={activeId === id}
                onClick={() => setActiveId(id)}
              />
            </li>
          ))}
        </ul>
        <p className="mt-10">Wybierz bramę, by otworzyć</p>
      </div>

      {/* liczba kropek = liczba stron */}
      <DotsNav count={gates.length} current={page} onChange={setPage} className="mt-20" />
    </section>
  );
}
