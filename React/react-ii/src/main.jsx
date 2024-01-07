import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoute from './MainRoute.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainRoute />
    </BrowserRouter>
    ,
)
