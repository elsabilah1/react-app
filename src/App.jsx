import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Product from './views/Product'
import NoMatch from './views/NoMatch'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
