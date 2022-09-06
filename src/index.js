import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import LiveVideoStreaming from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LiveVideoStreaming />
  </StrictMode>
);
