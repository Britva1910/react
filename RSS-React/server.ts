import fs from 'node:fs/promises';
import express from 'express';

const PORT = 5000;

const app = express();

const { createServer } = await import('vite');

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;

    let template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);

    const html = template.split(`<!--app-html-->`);

    const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

    const { pipe } = await render(url, {
      onShellReady() {
        res.write(html[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
    });

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    //console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
