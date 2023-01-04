import { Link } from 'react-router-dom'

function NoMatch() {
  return (
    <div className='h-full grid place-items-center'>
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to='/'>Go to the home page</Link>
        </p>
      </div>
    </div>
  )
}

export default NoMatch
