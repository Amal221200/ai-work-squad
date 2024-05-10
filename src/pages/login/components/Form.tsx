import { LockKeyhole, User } from "lucide-react"
import { FormEvent, useCallback, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"
import { AuthContextType } from "../../../utils/types"
import { userInfo } from "../../../data"


const Form = () => {
    const navigate = useNavigate()
    const { setUserData } = useContext(AuthContext) as AuthContextType;

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data = {
            username: formData.get('username')?.toString(),
            password: formData.get('password')?.toString(),
        }

        if (userInfo.username !== data.username || userInfo.password !== data.password) {
            return alert('Invalid Credentials')
        }

        localStorage.setItem('ai_login', JSON.stringify(data));
        setUserData({ username: data.username!, password: data.password! });
        navigate("/")
    }, [setUserData, navigate])


    return (
        <div className='bg-[#171A1FFF] rounded-r-md max-w-lg sm:w-[60vw] w-[90vw] h-[80%] sm:p-6 p-3 mx-auto flex flex-col items-center gap-y-3'>
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p>Sign In to continue to Aiworksquad</p>

            <form className="flex flex-col gap-y-3 mt-5 sm:w-[80%] w-[85%]" onSubmit={handleSubmit}>
                <div className="bg-[#171A1FFF] border rounded flex gap-x-3 px-4 py-2">
                    <User className="text-gray-400" />
                    <input type="text" name="username" placeholder="Username" autoComplete="off" className="w-full bg-transparent outline-none" required />
                </div>
                <div className="bg-[#171A1FFF] border rounded flex gap-x-3 px-4 py-2">
                    <LockKeyhole className="text-gray-400" />
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent outline-none" required />
                </div>
                <footer className="flex justify-between items-center font-semibold flex-wrap text-[.9rem] gap-y-2">
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" name="" id="remeber-me" />
                        <label htmlFor="remeber-me" className="">Remember Me</label>
                    </div>
                    <div className="w-full text-center sm:text-right">
                        <Link to="#" className="text-gray-400">Forgot Password?</Link>
                    </div>
                </footer>
                <button className="inline-block w-full py-2 bg-[#4069E5FF] text-white mt-4" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Form