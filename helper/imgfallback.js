import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)
  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      width="112"
      height="112"
    />
  )
}

export default ImageWithFallback
