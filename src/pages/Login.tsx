import React, { useState } from 'react';
import { useLoginMutation } from '../graphql/generated/urql';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [{ fetching }, loginUser] = useLoginMutation();

  const [token, setToken] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setToken(null);

    const res = await loginUser({ email, password });

    if (res.error) {
      const isNetwork = !!res.error.networkError;
      const message = isNetwork
        ? 'Błąd połączenia z serwerem.'
        : res.error.message || 'Nieprawidłowe dane logowania.';
      setSubmitError(message);
      return;
    }

    const t = res.data?.loginUser?.token ?? null;
    setToken(t);
  }

  return (
    <main className="grid min-h-dvh place-items-center bg-gray-50">
      <section className="w-full max-w-sm rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold tracking-tight">Logowanie</h1>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="tester@parkapp.pl"
              autoComplete="email"
            />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="password" className="text-sm font-medium">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:opacity-50"
            disabled={!email || !password || fetching}
          >
            {fetching ? 'Logowanie...' : 'Zaloguj'}
          </button>
        </form>

        {submitError && (
          <div
            role="alert"
            aria-live="polite"
            className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {submitError}
          </div>
        )}

        {token && (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2"
          >
            <p className="text-sm text-emerald-800">Zalogowano pomyślnie.</p>
            <pre className="mt-1 overflow-x-auto text-xs text-emerald-900">{token}</pre>
          </div>
        )}
      </section>
    </main>
  );
}
