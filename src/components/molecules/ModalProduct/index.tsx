'use client'
import { ImageHelper, ModalOverlay, Modals } from "@/components/atoms";
import { Product } from "@/configs/models/responses/products/responseProduct";
import { useAppContext } from "@/context/AppContext";

type ModalProductProps = {
  product: Product
}

const ModalProduct = ({ product }: ModalProductProps) => {
  const checkProductNameIsNull = `${product.name ?? 'No name product'}`

  const { setIsModalProductOpen } = useAppContext()
  
  const closeModal = () => setIsModalProductOpen(false)

  return (
    <Modals
      id="modal"
      section="div"
      className="fixed w-screen h-screen z-[999999] top-0 bottom-0 flex-col flex items-center justify-center"
    >
      <ModalOverlay className="top-0 left-0 w-screen h-screen z-[1] bg-black opacity-60" onClick={closeModal}/>
      <div className="bg-white w-full md:w-[400px] lg:w-[450px] rounded-2xl px-4 py-6 z-[9999999] fixed" style={{height: 'calc(100% - 45px)', maxHeight: '50%'}}>
        
        <div className="relative w-full h-[240px]">
          <ImageHelper
            source={product.image}
            fill={true}
            alt="image-product"
            style={{objectFit: 'cover'}}
            priority
            fallbackSrc="/assets/illustrations/crash.png"
          />
        </div>
        <h1 className="text-center text-base pt-4">{`${checkProductNameIsNull} no ${product.id}`}</h1>
      </div>
    </Modals>
  );
};

export default ModalProduct;
