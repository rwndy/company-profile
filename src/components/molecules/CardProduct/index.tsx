import { ImageHelper } from '@/components/atoms'
import { Product } from '@/configs/models/responses/products/responseProduct'

type CardProductProps = {
  product: Product
  onClick: (id: number | string) => void
}

const CardProduct = ({ product, onClick }: CardProductProps) => {
  const checkProductNameIsNull = `${product.name ?? 'No name product'}`

  return (
    <button onClick={() => onClick(product.id)} className='cursor-pointer'>
      <div className='flex w-full h-[240px] relative'>
        <ImageHelper 
          fill={true}
          style={{objectFit: 'cover'}}
          alt={`${product.name}`}
          source={product.image}
          fallbackSrc='/assets/illustrations/crash.png'
        />
      </div>
      <h4 className='w-full pt-5 pl-5 pr-5 h-[80px] font-semibold text-sm sm:text-lg md:text-sm lg:text-xl'>{`${checkProductNameIsNull} no ${product.id}`}</h4>
    </button>
  )
}

export default CardProduct