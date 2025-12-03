import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Akane } from './app/Akane';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Akane />
  </StrictMode>,
);
