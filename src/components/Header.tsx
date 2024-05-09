import { CircleUser } from "lucide-react"


const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-3 py-2 rounded bg-primary-600 sm:px-4">
            <div className="w-[180px] bg-primary-100 border-2 border-black rounded p-2">
                <img src="/header.png" alt="" className="w-full" />
            </div>
            <div className="grid items-center grid-cols-3 pl-3 gap-x-3">
                <button type="button" className="col-span-2 p-2 bg-white border-2 border-black rounded ">Department</button>
                <button type="button" className="flex gap-x-2"><CircleUser /> Nithin</button>
            </div>
        </header>
    )
}

export default Header