import './App.css'
import AuthProvider from './Context/AuthProvider'
import ChatRoom from './components/ChatRoom'
import Login from './components/Login'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route Component={Login} path='/login' />
          <Route Component={ChatRoom} path='/' />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
