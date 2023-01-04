import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className='border rounded-md shadow hover:scale-105'>
        <div
          style={{
            backgroundImage: `url(${product.images[0].imageUrl})`,
          }}
          className='w-full h-52 bg-no-repeat bg-cover rounded-t-md'
        />
        <div className='p-3 flex items-center justify-between'>
          <p className='text-sm'>{product.name}</p>
          <p className='text-xs font-bold text-green-800'>$ {product.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
