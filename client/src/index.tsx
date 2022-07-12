import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'store';
import GiftApp from 'components/GiftApp';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('AppContainer');
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <GiftApp />
      </Provider>
    </React.StrictMode>
  );
});
