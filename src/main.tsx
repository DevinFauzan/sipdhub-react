import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
// import './Footer.css';
// import './Header.css';
import './Sidebar.css';
import './login.css'; // Ensure your styles are correctly linked
import './assets/css/sb-admin-2.min.css';
import './assets/css/utils.css';
import './Home.css';
import './latihan.css'
import './assets/css/tw-colors.scss';
import './assets/css/custom.scss';
import App from './App'; // Adjust the import path as needed

// Create a root for the React application
const root = createRoot(document.getElementById('root')!); // Ensure 'root' exists in your HTML

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);