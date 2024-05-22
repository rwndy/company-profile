import React from 'react'
import { Homepage } from '@/components/templates'
import { fetchProducts, fetchImages } from '@/services/product'

export default async function Home() {
  const productResponse = await fetchProducts('https://www.giovankov.com/api/product.json')
  const products = productResponse.data

  const imageProductResponse = await fetchImages('https://www.giovankov.com/api/image.json')
  const images = imageProductResponse.data

  const idToImage: { [id: string]: string } = {}
  images.forEach(image => {
    image.id.forEach(id => {
      idToImage[id] = image.image
    })
  })

  products.forEach(product => {
    product.image = idToImage[product.id]
  })

  return (
    <Homepage products={products}/>
  )
}
