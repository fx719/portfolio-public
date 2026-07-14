import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/index.jsx'
import Error from './pages/Error/index.jsx'
import Layout from './components/Layout/index.jsx'
import Bio from './pages/Bio/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
