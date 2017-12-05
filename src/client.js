import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Page from './pages'
import Layout from './pages/components/Layout'

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));


hydrate(
  <BrowserRouter>
    <Page {...initialData} />
  </BrowserRouter>,
  document.querySelector('#app')
)