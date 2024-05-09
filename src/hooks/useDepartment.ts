import { create } from "zustand";

interface useDepartmentStore {
    current: string,
    onChange: (value: string) => void
}

const useDepartment = create<useDepartmentStore>((set) => ({
    current: "Marketing",
    onChange(value) {
        set({ current: value })
    },
}))

export default useDepartment;