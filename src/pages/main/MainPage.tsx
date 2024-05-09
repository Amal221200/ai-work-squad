import ChatSection from "./components/ChatSection"
import InputSection from "./components/InputSection"


const MainPage = () => {
  return (
    <main className="sm:col-span-2 lg:col-span-4 md:col-span-3">
        <ChatSection />
        <InputSection />
    </main>
  )
}

export default MainPage