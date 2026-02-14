/**
 * errorOverlay.js — Vanilla ErrorBoundary equivalent.
 * Catches uncaught errors + unhandled rejections.
 * Shows premium dark-themed overlay. Never allows white screen.
 */

import { openWhatsApp } from './whatsapp.js';

const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV;

let overlayEl = null;

function createOverlay(errorMsg, errorStack) {
  // Prevent duplicate overlays
  if (overlayEl) {
    overlayEl.remove();
  }

  overlayEl = document.createElement('div');
  overlayEl.id = 'errorOverlay';
  overlayEl.setAttribute('role', 'alert');
  overlayEl.setAttribute('aria-live', 'assertive');

  const stackHtml = isDev
    ? `<details style="margin-top:16px;color:#A9B0D6;font-size:13px;max-height:200px;overflow:auto;">
        <summary style="cursor:pointer;color:#8FE7E6;">Dev Details</summary>
        <pre style="white-space:pre-wrap;word-break:break-all;margin-top:8px;padding:12px;background:rgba(0,0,0,0.4);border-radius:8px;font-family:monospace;font-size:12px;">${escapeHtml(errorMsg || 'Unknown error')}\n\n${escapeHtml(errorStack || 'No stack trace')}</pre>
      </details>`
    : '';

  overlayEl.innerHTML = `
    <div style="
      position:fixed;inset:0;z-index:99999;
      display:flex;align-items:center;justify-content:center;
      background:rgba(5,6,10,0.95);backdrop-filter:blur(8px);
      padding:24px;font-family:'Inter','Segoe UI',sans-serif;
    ">
      <div style="
        max-width:460px;width:100%;
        background:rgba(11,13,20,0.85);
        border:1px solid rgba(255,255,255,0.08);
        border-radius:22px;padding:40px 32px;
        text-align:center;
      ">
        <div style="font-size:48px;margin-bottom:16px;">⚠️</div>
        <h2 style="color:#E8ECFF;font-size:22px;font-weight:700;margin:0 0 12px;">Something went wrong</h2>
        <p style="color:#A9B0D6;font-size:15px;line-height:1.6;margin:0 0 24px;">
          Please reload the page. If it keeps happening, contact me on WhatsApp.
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button id="errorReloadBtn" style="
            background:#FF3B1D;color:#fff;border:none;
            padding:12px 28px;border-radius:12px;
            font-size:15px;font-weight:600;cursor:pointer;
            transition:opacity 0.2s;
          ">Reload Page</button>
          <button id="errorWABtn" style="
            background:rgba(143,231,230,0.15);color:#8FE7E6;border:1px solid rgba(143,231,230,0.3);
            padding:12px 28px;border-radius:12px;
            font-size:15px;font-weight:600;cursor:pointer;
            transition:opacity 0.2s;
          ">WhatsApp</button>
        </div>
        ${stackHtml}
      </div>
    </div>
  `;

  document.body.appendChild(overlayEl);

  // Bind buttons
  document.getElementById('errorReloadBtn')?.addEventListener('click', () => {
    window.location.reload();
  });
  document.getElementById('errorWABtn')?.addEventListener('click', () => {
    try {
      openWhatsApp('floating');
    } catch {
      window.open('https://wa.me/201234567890', '_blank', 'noopener');
    }
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Register global error handlers. Call once in main.js.
 */
export function registerErrorOverlay() {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('[ErrorOverlay]', message, source, lineno, colno, error);
    createOverlay(
      String(message),
      error?.stack || `${source}:${lineno}:${colno}`
    );
    // Don't prevent default so it still logs to console
    return false;
  };

  window.onunhandledrejection = (event) => {
    const reason = event.reason;
    console.error('[ErrorOverlay] Unhandled rejection:', reason);
    createOverlay(
      reason?.message || String(reason),
      reason?.stack || 'Promise rejection (no stack)'
    );
  };
}
