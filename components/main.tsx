import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'mobx-react';
import App from './app';

const root = ReactDOM.createRoot(
  document.querySelector('#rootReact') as HTMLElement
);

root.render(<App />);
