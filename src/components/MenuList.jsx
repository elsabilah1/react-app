import { Link } from 'react-router-dom'

function MenuList({ closeMenu }) {
  return (
    <div>
      <ul className='flex flex-col md:flex-row gap-3 text-xl md:text-base mt-5 md:mt-0'>
        <li>
          <Link to='/' onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={closeMenu}>
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuList
