import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className='min-h-screen relative flex flex-col'>
      <Header />
      <main className='p-3 flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
