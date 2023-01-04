import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProduct } from '../lib/api'

function Product() {
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery('product', () => getProduct(id))

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Something wrong!</p>

  return (
    <div>
      <div className='flex justify-between items-center mb-3'>
        <h1 className='text-lg font-bold'>{data.name}</h1>
        <p className='text-sm font-bold text-green-800'>$ {data.price}</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${data.images[0].imageUrl})`,
        }}
        className='w-full h-52 bg-no-repeat bg-cover mb-3'
      />
      <p>{data.description}</p>
    </div>
  )
}

export default Product
