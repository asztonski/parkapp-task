import './index.css';
import PingProbe from './graphql/devtools/PingProbe';

export default function App() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <PingProbe />
      <h1>Otwórz bramę</h1>
      <h2>Długa nazwa pilota</h2>
      <button>Przycisk</button>
      <p>Wybierz bramę, by otworzyć</p>
    </main>
  );
}
