import React from 'react';
import { createRoot } from 'react-dom/client';
import GiftApp from 'components/GiftApp';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('AppContainer');
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <GiftApp />
    </React.StrictMode>
  );
});
