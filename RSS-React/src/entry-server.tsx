import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import App from './App';

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={setupStore()}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
}
