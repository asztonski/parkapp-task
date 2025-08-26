import LoginProbe from './graphql/devtools/LoginProbe';
import './index.css';

export default function App() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <LoginProbe />
      <h1>Otwórz bramę</h1>
      <h2>Długa nazwa pilota</h2>
      <button>Przycisk</button>
      <p>Wybierz bramę, by otworzyć</p>
    </main>
  );
}
