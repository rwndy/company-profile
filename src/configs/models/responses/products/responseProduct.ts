export interface Product {
  id: string
  name: string | null
  image: string
}

export interface ProductResponse {
  data: Product[]
}