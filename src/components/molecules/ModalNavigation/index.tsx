'use client'
import Image from "next/image"
import Link from "next/link"
import { useAppContext } from "@/context/AppContext"
import { ModalOverlay, Modals } from "@/components/atoms"

const ModalNavigation = () => {
  const { closeModal } = useAppContext()

  const listNavs = [
    { id: 1, route: "/", title: "Home" },
    { id: 2, route: "#about", title: "About" },
    { id: 3, route: "#product", title: "Product" },
  ]

  return (
    <>
      <ModalOverlay
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={closeModal}
      />
      <Modals
        id="modal"
        section="div"
        className="fixed inset-0 z-50 flex justify-end"
      >
        <div className="bg-[#ffae41] w-full max-w-lg h-full p-8 transition-all duration-200 animate-moveFromRight">
          <button className="flex justify-end mb-4" onClick={closeModal}>
            <Image src="/assets/icons/icon-close.svg" alt="icon-close" width={24} height={24} />
          </button>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center w-full">
              {listNavs.map((list) => (
                <button
                  key={list.id}
                  className="py-4 text-lg"
                  onClick={closeModal}
                >
                  <Link href={list.route} className="hover:underline text-white" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)' }}>
                    {list.title}
                  </Link>
                </button>
              ))}
            </ul>
          </div>
        </div>
      </Modals>
    </>
  )
}

export default ModalNavigation
