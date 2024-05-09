import { Plus } from "lucide-react"
import SidebarFooter from "./SidebarFooter"
import SidebarHistory from "./SidebarHistory"

const Sidebar = () => {

    return (
        <>
            <aside className="hidden w-full px-1 py-3 border-2 rounded sm:justify-between sm:flex-col sm:flex sm:col-span-1">
                <div>
                    <button type="button" className="flex justify-center w-full px-2 py-3 transition-colors border rounded gap-x-2 text-secondary border-secondary hover:bg-secondary hover:text-white">
                        <Plus /> New Chat
                    </button>
                    <SidebarHistory />
                </div>

                <SidebarFooter />
            </aside>
            {/* <aside className="fixed sm:hidden">

            </aside> */}
        </>
    )
}

export default Sidebar