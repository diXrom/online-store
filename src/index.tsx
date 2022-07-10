import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Not found rootElement element by Id');
const root = createRoot(rootElement);

root.render(<App />);
