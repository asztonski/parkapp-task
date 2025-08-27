export const AUTH_KEY = 'parkapp_logged_in';

export function setAuth(value = true, persist: 'session' | 'local' = 'session') {
  if (typeof window === 'undefined') return;
  try {
    const store = persist === 'local' ? window.localStorage : window.sessionStorage;
    if (value) {
      store.setItem(AUTH_KEY, '1');
    } else {
      store.removeItem(AUTH_KEY);
    }
    const other = persist === 'local' ? window.sessionStorage : window.localStorage;
    other.removeItem(AUTH_KEY);
  } catch {
    /* ignore */
  }
}

export function clearAuth() {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.removeItem(AUTH_KEY);
    window.localStorage.removeItem(AUTH_KEY);
  } catch {
    /* ignore */
  }
}

export function isAuthed(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return (
      window.sessionStorage.getItem(AUTH_KEY) === '1' ||
      window.localStorage.getItem(AUTH_KEY) === '1'
    );
  } catch {
    return false;
  }
}
