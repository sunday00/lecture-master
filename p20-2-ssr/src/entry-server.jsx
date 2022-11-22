import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import App from './App'

export function render(url, context) {
  const users = [];
  const user = {};

  const preloads = {users, user}

  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={{context}}>
      <App preloads={preloads} />
    </StaticRouter>
  )
}
