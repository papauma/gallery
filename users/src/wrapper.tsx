import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './infrastructure/components/App/App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(
    <BrowserRouter basename="/users">
        <App />
    </BrowserRouter>
)
