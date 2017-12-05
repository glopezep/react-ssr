import path from 'path'
import http from 'http'
import express from 'express'
import chalk from 'chalk'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Page from './pages'
import Layout from './pages/components/Layout'

const context = {}
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

const initialData = {
  name: 'World'
};

app.use('/static', express.static(path.join('./dist')))
app.use((req, res) => {
  ReactDOMServer.renderToNodeStream(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Layout initialData={JSON.stringify(initialData)}>
        <Page {...initialData} />
      </Layout>
    </StaticRouter>
  ).pipe(res);
})

server.listen(port, () => {
  console.log(`${chalk.green('[react-ssr]')} server listening on port ${port}`)
})