import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <header className='p-3 flex justify-between items-center border-b'>
      <Link to='/'>
        <h1 className='text-lg font-bold'>MyApp</h1>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
