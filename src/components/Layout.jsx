import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className='min-h-screen relative'>
      <Header />
      <main className='p-3'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
