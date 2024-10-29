import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import raw from './vite-env.d.ts?raw';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
