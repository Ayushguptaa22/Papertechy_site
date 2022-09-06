import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <img src={urlFor(heroBanner.image)} alt='' className='hero-banner-image'/>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <br/>
          <br/>
          <p><b>Welcome to Papertechy!</b></p>
          <div className='desc'>
            <h5><u>Our Motto</u></h5>
            <p><b>{heroBanner.desc}</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner