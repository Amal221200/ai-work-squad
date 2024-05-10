import { Triangle } from "lucide-react"

interface TooltipProps {
    data: string,
    children: React.ReactNode
}

const Tooltip = ({ data, children }: TooltipProps) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute transition-transform delay-100 transform scale-0 group-hover:scale-100 cursor-pointer rounded p-2 text-sm left-0 z-10 invisible w-full hover:visible -translate-y-full group-hover:translate-y-0 group-hover:visible bg-zinc-200 top-[110%] text-center shadow">
                <Triangle size={8} color="black" fill="black" className="absolute -top-2 left-[50%]" />
                {data}
            </div>
        </div>
    )
}

export default Tooltip