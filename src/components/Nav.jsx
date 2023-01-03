import { Bars3Icon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import MenuList from './MenuList'

function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Bars3Icon
        className='w-5 md:hidden'
        onClick={() => setShowMenu(!showMenu)}
      />

      <NavMobile showMenu={showMenu} handler={() => setShowMenu(false)} />

      <div className='hidden md:block'>
        <MenuList />
      </div>
    </>
  )
}

export default Nav

const NavMobile = ({ showMenu, handler }) => {
  const maskTransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  })

  return (
    <>
      {maskTransitions(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className='bg-black/50 fixed top-0 left-0 w-full h-full z-50'
              onClick={handler}
            ></animated.div>
          )
      )}

      {menuTransitions(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3'
            >
              <MenuList />
            </animated.div>
          )
      )}
    </>
  )
}
