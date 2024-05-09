import { CircleUser, Menu, X } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"
import useSidebar from "../hooks/useSidbar"
import { useCallback } from "react"


const Header = () => {
    const match = useMediaQuery('(min-width: 640px)')
    const { open, onClose, onOpen } = useSidebar()
    const toggleSidebar = useCallback(() => {
        if (open) {
            return onClose()
        }
        onOpen()
    }, [open, onClose, onOpen])
    
    return (
        <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-3 py-2 rounded bg-primary-600 sm:px-4">
            <div className="flex items-center gap-x-2">
                <div className="block sm:hidden">
                    <button type="button" onClick={toggleSidebar}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
                <div className="sm:w-[180px] w-[40px] bg-primary-100 border-2 border-black rounded p-2">
                    <img src={match ? "/header.png" : "/header-small.png"} alt="" className="w-full" />
                </div>
            </div>
            <div className="grid items-center grid-cols-3 pl-3 gap-x-3">
                <button type="button" className="col-span-2 p-2 bg-white border-2 border-black rounded ">Department</button>
                <button type="button" className="flex gap-x-2"><CircleUser /> <span className="hidden sm:inline">Nithin</span></button>
            </div>
        </header>
    )
}

export default Header