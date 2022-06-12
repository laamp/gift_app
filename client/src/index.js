import React from 'react';
import { createRoot } from 'react-dom/client';
import GiftApp from './GiftApp';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('AppContainer');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <GiftApp tsTest='hello' />
    </React.StrictMode>
  );
});
