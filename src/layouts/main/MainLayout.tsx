import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from './components/sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div className='h-full border-2'>
            <Header />
            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-x-2 mt-[90px] h-[calc(100%-100px)] px-2'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout