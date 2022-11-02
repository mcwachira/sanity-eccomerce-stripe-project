import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useNextSanityImage } from 'next-sanity-image'
import { urlFor } from '../lib/client'
const HeroBanner = ({heroBanner}) => {

    const {product, image, smallText, midText, largeText1, desc} = heroBanner
    // console.log(heroBanner)
    // const imageProps = useNextSanityImage(
    //     urlFor,
    //     heroBanner.image
    // )
  return (
 
          <div className="hero-banner-container">

              <div>
                  <p className="beats-solo">
                      {smallText}
                  </p>
                  <h3>
                      {midText}
                  </h3>
                  <h1>
                      {largeText1}
                  </h1>
                  {/* <Image src={imageProps} alt="headphones" className='hero-banner-image' layout="intrinsic" /> */}
                  <img src={urlFor(image)} alt="headphones" className='hero-banner-image' />
              </div>
              
          <Link href={`/product/${product}`}>
              
    <button type='button'> {heroBanner?.buttonText}</button>
</Link>
<div className="desc">
    <h5>

        Description
    </h5>
    <p>
                  {desc}
    </p>
</div>
 </div>
 
  )
}

export default HeroBanner