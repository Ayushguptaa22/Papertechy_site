import React from 'react'
import {client} from '../lib/client';

import {Product, FooterBanner, HeroBanner} from '../components';

const Home = () => {
  return (
    <>
    <HeroBanner/>
    
    <div className="products-heading">
      <h2>Best selling products</h2>
      <p>Variety of products from Paper quilling artworks to custom resin badges and more ...</p>
    </div>
    
    <div className='products-container'>
     { ['Product-1 ','Product-2 ','Product-3 ', 'Product-4 ', 'Product-5 '].map(
       (product) => product)}
    </div>

    <div >
      <FooterBanner/>
    </div>
    </>
  )
}

export default Home