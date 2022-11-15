import express from 'express'
import { createServer as createViteServer } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: {middlewareMode: true},
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      // index file load
      let template = fs.readFileSync(path.resolve('index.html'), 'utf-8')

      // index 에 react, vite 등 헤더에 미리 기본적 스크립트 삽입
      template = await vite.transformIndexHtml(url, template)

      // 본격적으로 리액트 페이지 탐험
      const {render} = await vite.ssrLoadModule('/src/entry-server.jsx')

      // 리액트 페이지 생성
      const appHtml = await render(url)

      // index 에 생성된 페이지 삽입
      const html = template.replace('<!--ssr=outlet-->', appHtml)

      // 프론트로 뿌리기
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)

      next(e)
    }
  })

  return { app, vite }
}

createServer().then(({ app }) => {
  app.listen(5174, () => {
    console.log('now running');
  })
})
