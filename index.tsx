import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('Initializing Davor Mulalić Portfolio...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Critical Error: Could not find root element 'root' to mount React app.");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React app mounted successfully.');
} catch (err) {
  console.error('Failed to mount React app:', err);
}
