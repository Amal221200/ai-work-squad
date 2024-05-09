import { Pencil } from "lucide-react"
import { ChatData } from "../../../data"
import ChatBox from "./ChatBox"

const ChatSection = () => {
    return (
        <section className="h-[calc(100%-90px)] overflow-y-auto">
            <div className="p-3 mb-3 space-y-3 border rounded border-neutral-400">
                <h2 className="font-bold">Introduce yourself to AIWorkSquad</h2>
                <p className="text-sm font-semibold text-gray-500">I am Nithin. CEO of an IT startup in India <Pencil color="black" size={13} className="inline cursor-pointer" /></p>
            </div>
            <div className="flex flex-col gap-y-4">
                {
                    ChatData.map((chatData) => (
                        <ChatBox key={chatData.id} chatData={chatData} />
                    ))
                }
            </div>
        </section>
    )
}

export default ChatSection