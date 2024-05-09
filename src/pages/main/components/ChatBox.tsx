import { useContext } from "react"
import cn from "../../../utils/cn"
import { AuthContext } from "../../../providers/AuthProvider"
import { AuthContextType } from "../../../utils/types"
import { CircleHelp, Copy, ExternalLink, FileDown, Mail, MessageSquareText } from "lucide-react"


const ChatBox = ({ chatData }: { chatData: { id: string, user: string, data: string } }) => {
    const { userData } = useContext(AuthContext) as AuthContextType;
    const isUser = userData?.username === chatData.user
    return (
        <article className={cn("p-3 flex gap-x-3 rounded-lg border-2 group", isUser && "flex-row-reverse ml-auto", isUser ? "bg-primary-600 text-white border-white rounded-br-none" : "bg-white text-primary-600 border-primary-600 rounded-bl-none")}>
            <div className="mt-[4px]">
                {
                    isUser ? (
                        <CircleHelp size={18} />
                    ) : <MessageSquareText size={18} />
                }
            </div>
            <div className="w-full">
                <p className="max-w-xl">
                    {chatData.data}
                </p>
                <div className={cn("flex gap-x-2 justify-end p-1 invisible group-hover:visible", isUser && "hidden")}>
                    <Copy  size={18} className="text-black transition-colors cursor-pointer hover:text-primary-600"/>
                    <ExternalLink  size={18} className="text-black transition-colors cursor-pointer hover:text-primary-600"/>
                    <FileDown size={18} className="text-black transition-colors cursor-pointer hover:text-primary-600" />
                    <Mail  size={18} className="text-black transition-colors cursor-pointer hover:text-primary-600"/>
                </div>
            </div>
        </article>
    )
}

export default ChatBox