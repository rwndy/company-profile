'use client'
import { Hero, ModalNavigation, About, Products, ModalProduct } from '@/components/molecules'
import { Header, Footer } from '@/components/atoms'
import { useAppContext } from '@/context/AppContext'
import { Product } from '@/configs/models/responses/products/responseProduct'

type HomepageProps = {
  products: Product[]
}

const Homepage = ({ products }: HomepageProps) => {
  const { isModalOpen, isModalProductOpen, productData } = useAppContext()

  return (
    <main>
      { isModalOpen && <ModalNavigation /> }
      { isModalProductOpen && <ModalProduct product={productData}/> }
      <Header />
      <Hero />
      <About />
      <Products products={products}/>
      <Footer />
    </main>
  )
}

export default Homepage