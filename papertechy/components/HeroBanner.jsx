import React from 'react'
import Link from 'next/link';
const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className=''>Small Text</p>
        <h3>Medium Text</h3>
        <img src='' alt='' className='hero-banner-image'/>

        <div>
          <Link href="/product/ID">
            <button type="button">Button text</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner