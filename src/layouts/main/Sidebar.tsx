import { FilePenLine, History, Plus, ShieldCheck, SquareArrowOutUpRight, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {

    return (
        <>
            <aside className="hidden w-full px-1 py-3 border-2 rounded sm:justify-between sm:flex-col sm:flex sm:col-span-1">
                <div>
                    <button type="button" className="flex justify-center w-full px-2 py-3 transition-colors border rounded gap-x-2 text-secondary border-secondary hover:bg-secondary hover:text-white">
                        <Plus /> New Chat
                    </button>
                    <h4 className="flex items-center justify-center my-2 text-[14px] gap-x-1"><History size={15} /> History</h4>

                    <div></div>
                </div>

                <div className="p-2 space-y-3">
                    <Link to="#" className="flex items-center text-sm font-semibold gap-x-3 text-neutral-600">
                        <UserPlus size={18} /> Upgrade to pro
                    </Link>
                    <Link to="#" className="flex items-center text-sm font-semibold gap-x-3 text-neutral-600">
                        <SquareArrowOutUpRight size={18} /> Updates and FAQ
                    </Link>
                    <Link to="#" className="flex items-center text-sm font-semibold gap-x-3 text-neutral-600">
                        <FilePenLine size={18} /> Terms and Conditions
                    </Link>
                    <Link to="#" className="flex items-center text-sm font-semibold gap-x-3 text-neutral-600">
                        <ShieldCheck size={18} /> Privacy Policy Change
                    </Link>
                </div>
            </aside>
            {/* <aside className="fixed sm:hidden">

            </aside> */}
        </>
    )
}

export default Sidebar