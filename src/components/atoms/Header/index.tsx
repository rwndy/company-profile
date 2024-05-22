'use client'
import Link from "next/link"
import { useAppContext } from "@/context/AppContext"

type ListRouter = {
  id: number
  name: string
  pathname: string
}

const Header = () => {
  const { openModal } = useAppContext()

  const listRouters: ListRouter[] = [
    { id: 1, name: 'About', pathname: '#about' },
    { id: 2, name: 'Products', pathname: '#product' },
  ]

  return (
    <nav className="relative z-10 py-2 px-4 text-white w-full">
      <div className="flex items-center justify-between w-full" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)' }}>
        <Link className="font-semibold text-xl" href="/">The Company</Link>
        <button
          className="block sm:hidden md:hidden lg:hidden text-white"
          onClick={openModal}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`sm:flex md:flex lg:flex hidden sm:block md:block lg:block`}>
          {
            listRouters.map(router => (
              <Link className="text-xl pl-2 font-semibold mr-[30px]" key={router.id} href={router.pathname}>{router.name}</Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Header
