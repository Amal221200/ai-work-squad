import { CircleHelp, SendHorizontal } from "lucide-react"
import useDepartment from "../../../hooks/useDepartment"


const InputSection = () => {
  const {current} = useDepartment()
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 border-2 rounded gap-x-3 text-primary-600">
      <CircleHelp />
      <input type="text" placeholder={`Enter your ${current.toLowerCase()} query here...`} 
      className="flex-1 px-2 py-1 outline-none placeholder:text-primary-600" />
      <button type="button">
        <SendHorizontal />
      </button>
    </div>
  )
}

export default InputSection