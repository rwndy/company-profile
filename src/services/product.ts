import { fetchData } from "@/configs/api";
import { ImagesProductResponse } from "@/configs/models/responses/images/responseImage";
import { ProductResponse } from "@/configs/models/responses/products/responseProduct";
export const fetchProducts = (url: string) => {
  return fetchData<ProductResponse>(url)
}

export const fetchImages = (url: string) => {
  return fetchData<ImagesProductResponse>(url)
}