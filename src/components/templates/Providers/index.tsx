'use client'
import { ReactNode } from 'react'
import { AppProvider } from '@/context/AppContext'
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>{children}</AppProvider>
  )
}

export default Providers