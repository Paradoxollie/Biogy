import { BROWSER_API_URL } from '../config';

export async function apiRequest(path, options = {}) {
  const { timeout = 15000, ...init } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(`${BROWSER_API_URL}${path}`, { ...init, signal: controller.signal });
    const data = await response.json().catch(() => null);
    if (!response.ok || !data) {
      const error = new Error(response.status >= 500 || !data
        ? 'Le service est momentanément indisponible. Tes cours restent accessibles ; réessaie dans un instant.'
        : data.message || 'La demande n’a pas abouti. Réessaie.');
      error.status = response.status;
      throw error;
    }
    return data;
  } catch (error) {
    if (error.name === 'AbortError' || error instanceof TypeError) {
      throw new Error('La connexion au serveur prend trop de temps. Vérifie ta connexion puis réessaie.');
    }
    throw error;
  } finally { clearTimeout(timer); }
}
