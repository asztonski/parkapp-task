// src/data/gates.ts
export type Gate = { id: string; label: string };

export const gates: Gate[][] = [
  [
    { id: 'gate-main', label: 'Brama główna' },
    { id: 'gate-garage', label: 'Brama garażowa' },
    { id: 'barrier-entry', label: 'Szlaban wjazdowy' },
    { id: 'barrier-exit', label: 'Szlaban wyjazdowy' },
  ],
  [
    { id: 'gate-service', label: 'Brama serwisowa' },
    { id: 'gate-side', label: 'Brama boczna' },
    { id: 'barrier-1', label: 'Szlaban 1' },
    { id: 'barrier-2', label: 'Szlaban 2' },
  ],
  [
    { id: 'gate-north', label: 'Brama północna' },
    { id: 'gate-south', label: 'Brama południowa' },
    { id: 'barrier-3', label: 'Szlaban 3' },
    { id: 'barrier-4', label: 'Szlaban 4' },
  ],
  [
    { id: 'gate-east', label: 'Brama wschodnia' },
    { id: 'gate-west', label: 'Brama zachodnia' },
    { id: 'barrier-5', label: 'Szlaban 5' },
    { id: 'barrier-6', label: 'Szlaban 6' },
  ],
];
