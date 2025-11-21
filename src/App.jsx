
import React from 'react'
import Todo from './pages/todo'
import Login from './pages/login'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute'
import PublicRoute from './components/publicRoute'
import Home from './pages/Home.jsx'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={ <PublicRoute><Login /></PublicRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/todo" element={ <ProtectedRoute> <Todo /> </ProtectedRoute>} />
      </Routes>
  )
}

export default App
