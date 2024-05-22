import React from 'react'
import { ImageHelper } from '@/components/atoms'

const Hero = () => {
  return (
    <section id='hero' className='mt-[-75px] w-full'>
      <div className='relative w-full h-[640px]'>
        <ImageHelper 
          source='/assets/illustrations/bg-flat.webp'
          alt='background-image'
          fallbackSrc='/assets/illustrations/fallback-img.jpg'
          fill={true}
          style={{objectFit: 'cover'}}
          priority
        />
      <div className='relative sm:top-2/4 md:top-2/4 lg:top-2/4 px-4 w-full container top-[30%]'>
        <h1 className='text-white text-4xl'>{`Let's grow your business together`}</h1>
        <p className='text-white mt-4 sm:text-wrap sm:text-sm md:text-lg text-lg'>Welcome to The Company Agency, where innovation meets digital exceleece. <br />
        We are a passionate team dedicated to transforming your digital presence and driving unparalleled success in the online realm.</p>
      </div>
      </div>
    </section>
  )
}

export default Hero