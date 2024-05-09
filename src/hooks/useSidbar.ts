import { create } from "zustand";

interface SidebarStore {
    open: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useSidebar = create<SidebarStore>((set) => ({
    open: false,
    onOpen() {
        set({ open: true })
    },
    onClose() {
        set({ open: false })
    },
}))

export default useSidebar;
