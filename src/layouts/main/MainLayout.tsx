import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from './components/sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div className=''>
            <Header />
            <div className='grid lg:grid-cols-5 md:grid-cols-4 bg-white sm:grid-cols-3 h-[calc(100%-100px)] gap-x-2 mt-[80px] px-2'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout