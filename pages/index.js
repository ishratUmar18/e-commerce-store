import React from 'react'

import { Product, FooterBanner, HeroBanner} from '../components';

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h1>Best Selling Products</h1>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home
