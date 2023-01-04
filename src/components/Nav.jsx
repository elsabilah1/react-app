import { Bars3Icon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import MenuList from './MenuList'
import NavMobile from './NavMobile'

function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Bars3Icon
        className='w-5 md:hidden'
        onClick={() => setShowMenu(!showMenu)}
      />

      <NavMobile showMenu={showMenu} closeMenu={() => setShowMenu(false)} />

      <div className='hidden md:block'>
        <MenuList closeMenu={() => setShowMenu(false)} />
      </div>
    </>
  )
}

export default Nav
