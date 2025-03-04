import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import NewClient from './pages/NewClient'
import LoginAdmin from './pages/LoginAdmin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '€'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/*" element={
          <>
            <Navbar />
            <hr />
            <div className='flex w-full'>
              <Sidebar />
              <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                <Routes>
                  <Route path="/" element={<Navigate to="/list" replace />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/newClient' element={<NewClient />} />
                  <Route path='/orders' element={<Orders />} />
                </Routes>
              </div>
            </div>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
