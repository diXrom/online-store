import React from 'react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Not found rootElement element by Id');
const root = createRoot(rootElement);

root.render(<CssBaseline ><App /></CssBaseline>);
