import { createContext, useEffect, useState } from 'react'
import { AuthContextType, UserDataType } from '../utils/types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserDataType | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const cookie = localStorage.getItem('ai_login');
        setUserData(JSON.parse(cookie || '[]')[0] || null)

        if (!cookie) {
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