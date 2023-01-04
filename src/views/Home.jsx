import { useQuery } from 'react-query'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../lib/api'

function Home() {
  const { data, isError, isLoading } = useQuery('products', getProducts)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something wrong!</div>
  }

  return (
    <div className='mb-20'>
      <h1 className='mb-3 text-xl font-bold'>Best Seller Products</h1>
      <div className='grid md:grid-cols-4 gap-4'>
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
