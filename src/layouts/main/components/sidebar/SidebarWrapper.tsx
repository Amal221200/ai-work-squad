import { useMediaQuery } from "usehooks-ts"
import cn from "../../../../utils/cn"
import useSidebar from "../../../../hooks/useSidbar"


const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
    const { open } = useSidebar()
    const match = useMediaQuery('(min-width: 640px)')
    return (
        <>
            {
                match ? (
                    <aside className="flex flex-col justify-between w-full col-span-1 px-1 py-3 border-2 rounded">
                        {children}
                    </aside>) : (
                    <aside className={cn("sidebar-transition fixed bg-white top-[70px] bottom-0 h-[88dvh] w-[300px] flex flex-col justify-between px-1 py-3 border-2 rounded", open ? "left-0" : "-left-full")}>
                        {children}
                    </aside>
                )
            }
        </>
    )
}

export default SidebarWrapper