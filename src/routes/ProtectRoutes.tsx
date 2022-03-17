import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Login from '../pages/Login'

function ProtectRoutes() {
    const { token} = useAuth()
  return token ? <Outlet/>: <Login/>
}

export default ProtectRoutes