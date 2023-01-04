import Nav from './Nav'

function Header() {
  return (
    <header className='p-3 flex justify-between items-center border-b'>
      <h1 className='text-lg font-bold'>MyApp</h1>
      <Nav />
    </header>
  )
}

export default Header
