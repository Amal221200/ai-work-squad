import { History, MessageSquare, PenLine, Trash2 } from "lucide-react"
import { ChatHistory } from "../../../../data"

const SidebarHistory = () => {
    return (
        <>
            <h4 className="flex items-center justify-center my-2 text-[14px] gap-x-1">
                <History size={15} /> History
            </h4>
            <ul className="px-2 space-y-3">
                {
                    ChatHistory.map((chat) => (
                        <li key={chat.id} className="flex items-center justify-between cursor-pointer gap-x-2">
                            <MessageSquare size={12} />
                            <p className="flex-1 line-clamp-1">{chat.title}</p>
                            <div className="flex gap-x-3">
                                <button type="button">
                                    <PenLine size={14} className="transition-colors hover:text-emerald-600" />
                                </button>
                                <button type="button">
                                    <Trash2 size={14} className="transition-colors hover:text-rose-600" />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default SidebarHistory