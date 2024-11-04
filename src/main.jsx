import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer /> {/* Self-closing tag */}
  </StrictMode>
);
