import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App5 from './App5.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App5 />
  </StrictMode>
);
