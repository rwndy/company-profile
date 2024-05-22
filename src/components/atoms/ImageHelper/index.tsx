'use client'
import { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageHelperProps = {
  source: string;
  fallbackSrc: string;
  alt: string;
} & Omit<ImageProps, 'src' >;

const ImageHelper = ({ source, fallbackSrc, alt, ...rest }: ImageHelperProps) => {
  const [sourceImage, setSourceImage] = useState<string>(source)
  const handleFallbackImage = () => {
    setSourceImage(fallbackSrc)
  }

  return (
    <Image 
      src={sourceImage}
      alt={alt} 
      onError={handleFallbackImage} 
      {...rest}
    />
  )
};

export default ImageHelper;
