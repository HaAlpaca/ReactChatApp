import './App.css'
import AppProvider from './Context/AppProvider'
import AuthProvider from './Context/AuthProvider'
import AddRoomModal from './Modals/AddRoomModal'
import InviteMemberModel from './Modals/InviteMemberModel'
import ChatRoom from './components/ChatRoom'
import Login from './components/Login'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route Component={Login} path='/login' />
            <Route Component={ChatRoom} path='/' />
          </Routes>
          <AddRoomModal/>
          <InviteMemberModel/>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
