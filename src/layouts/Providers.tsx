import { Outlet } from "react-router-dom"
import AuthProvider from "../providers/AuthProvider"

const Providers = () => {
  return (
    <AuthProvider>
        <Outlet />
    </AuthProvider>
  )
}

export default Providers