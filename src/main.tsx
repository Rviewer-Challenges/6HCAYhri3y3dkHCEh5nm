import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// IMPORTS OF SCREEN OR PAGES
const Main = lazy(() => import('./pages/Main'))
const ChatRoom = lazy(() => import('./pages/ChatRoom'))

import Loading from './pages/Loading';
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/room' element={<ChatRoom />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
