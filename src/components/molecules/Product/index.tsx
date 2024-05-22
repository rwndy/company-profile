'use client'
import { CardProduct } from '@/components/molecules'
import { Product } from '@/configs/models/responses/products/responseProduct'
import { useAppContext } from '@/context/AppContext'

type ProductsProp = {
  products: Product[]
}

const Products = ({ products }: ProductsProp) => {
  const { setIsModalProductOpen, saveProductData } = useAppContext()
  const handleModalProductById = (idPrev: string | number, nextId: string | number, product: Product) => {
    setIsModalProductOpen(idPrev === nextId)
    saveProductData(product)
  }

  return (
    <section id='product' className='px-4'>
      <h3 className="text-4xl sm:text-2xl font-semibold mt-8 mb-8">Our Products</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          products?.map((product) => (
            <CardProduct key={product.id} product={product} onClick={() => handleModalProductById(product.id, product.id, product)}/>
          ))
        }
      </ul>
    </section>
  )
}

export default Products