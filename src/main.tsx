import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AudioProvider } from './context/AudioContext';
import { BibleProvider } from './context/BibleContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <BibleProvider>
        <App />
      </BibleProvider>
    </AudioProvider>
  </StrictMode>
);