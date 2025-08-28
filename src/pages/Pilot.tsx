import { useEffect, useMemo, useState } from 'react';
import GateButton from '../components/ui/button/GateButton';
import DotsNav from '../components/ui/nav/DotsNav';
import { gates } from '../data/gates';
import RemotePilot from '../components/ux/RemotePilot';

export default function Pilot() {
  const [page, setPage] = useState<number>(0);
  const currentGates = useMemo(() => gates[page] ?? [], [page]);

  const [activeId, setActiveId] = useState<string>(currentGates[0]?.id ?? '');

  useEffect(() => {
    if (!currentGates.some((g) => g.id === activeId)) {
      setActiveId(currentGates[0]?.id ?? '');
    }
  }, [page, currentGates, activeId]);

  const activeIndex = useMemo(() => {
    const idx = currentGates.findIndex((g) => g.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [currentGates, activeId]);

  return (
    <section className="relative py-4">
      <div className="flex w-full">
        <RemotePilot className="relative -left-10 min-w-24" activeIndex={activeIndex} />
        <div className="ml-auto">
          <h2 className="text-center font-semibold tracking-tight whitespace-nowrap">
            Długa nazwa pilota
          </h2>
          <ul className="mt-12 flex max-w-60 min-w-48 flex-col gap-5">
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
      </div>

      <DotsNav count={gates.length} current={page} onChange={setPage} className="mt-24" />
    </section>
  );
}
