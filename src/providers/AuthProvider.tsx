import { createContext, useEffect, useState } from 'react'
import { AuthContextType, UserDataType } from '../utils/types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserDataType | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const cookie = JSON.parse(localStorage.getItem('ai_login') || '{"username": ""}');
        setUserData(cookie.username === '' ? null : cookie)
        if (!cookie.username.length) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider