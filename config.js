// =======================================================
// GANTI nilai di bawah ini dengan URL Web App Apps Script
// Anda, yang didapat setelah Deploy > New deployment.
// Contoh: 'https://script.google.com/macros/s/AKfycbx.../exec'
// =======================================================
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzaiz1Oz12QSgoX728uzBOSUuGfZRBPnlLryB708UgMQ12elIyuZMu8vN06oRSSa30eHQ/exec';

// ---------- Helper pemanggilan API ----------
function apiGet(action, params) {
  const url = new URL(APPS_SCRIPT_URL);
  url.searchParams.set('action', action);
  if (params) {
    Object.keys(params).forEach(k => url.searchParams.set(k, params[k]));
  }
  return fetch(url.toString()).then(r => r.json());
}

function apiPost(action, data) {
  return fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // penting: hindari preflight CORS
    body: JSON.stringify({ action, data })
  }).then(r => r.json());
}
