import { CircleUser, Menu, X } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"
import useSidebar from "../hooks/useSidbar"
import { useCallback, useState } from "react"
import useDepartment from "../hooks/useDepartment"


const Header = () => {
    const match = useMediaQuery('(min-width: 640px)')
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const { open, onClose, onOpen } = useSidebar()
    const { current, onChange: onDepartmentChange } = useDepartment()
    const toggleSidebar = useCallback(() => {
        if (open) {
            return onClose()
        }
        onOpen()
    }, [open, onClose, onOpen])
    
    const onSelectDropDown = useCallback((e:React.MouseEvent<HTMLLIElement, MouseEvent>)=> {
        e.stopPropagation()
        onDepartmentChange(e.currentTarget.textContent!)
        setDropDownOpen(false)  
    }, [onDepartmentChange])

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
            <div className="flex items-center gap-x-3">
                <button type="button" className="relative col-span-2 p-2 bg-white border-2 border-black rounded" onClick={()=> setDropDownOpen(current => !current)}>
                    <span className="hidden sm:inline">Department:</span> {current}
                    {
                        dropDownOpen && (
                            <ul className="absolute left-0 right-0 -bottom-[125%] w-max sm:w-full bg-gray-100 rounded overflow-hidden">
                                <li className="w-full px-2 text-left transition-colors hover:bg-gray-200" onClick={onSelectDropDown}>Sales</li>
                                <li className="w-full px-2 text-left transition-colors hover:bg-gray-200" onClick={onSelectDropDown}>
                                    Marketing
                                </li>
                            </ul>
                        )
                    }
                </button>
                <button type="button" className="flex sm:gap-x-2">
                    <CircleUser /> <span className="hidden sm:inline">Nithin</span>
                </button>
            </div>
        </header>
    )
}

export default Header