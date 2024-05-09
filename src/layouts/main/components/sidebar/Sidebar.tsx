import { Plus } from "lucide-react"
import SidebarFooter from "./SidebarFooter"
import SidebarHistory from "./SidebarHistory"
import SidebarWrapper from "./SidebarWrapper"

const Sidebar = () => {

    return (
        <SidebarWrapper>
            <div>
                <button type="button" className="flex justify-center w-full px-2 py-3 transition-colors border rounded gap-x-2 text-secondary border-secondary hover:bg-secondary hover:text-white">
                    <Plus /> New Chat
                </button>
                <SidebarHistory />
            </div>

            <SidebarFooter />
        </SidebarWrapper>
    )
}

export default Sidebar