import { FilePenLine, ShieldCheck, SquareArrowOutUpRight, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const SidebarFooter = () => {
    return (
        <footer className="p-2 space-y-3">
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
        </footer>
    )
}

export default SidebarFooter