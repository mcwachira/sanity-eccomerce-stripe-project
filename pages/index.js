import React from 'react'
import { client } from '../lib/client'
import { HeroBanner, FooterBanner, Product } from '../components'

const Home = ({products, bannerData}) => {
  return (
   <>
   
  <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

   <div className='products-heading'>
    <h1>
    Best selling products
    </h1>

    <p>
      Speakers of many variations
    </p>
   </div>

   <div className='products-container '>

    {
         products?.map((product, index) => <Product key={product._id} product={product}/>)
    }
   </div>

   <FooterBanner footerBanner={bannerData &&bannerData[0]} />
   </>
  )
}

//getServerSideprops used to fetch data from api or cms

export const getServerSideProps = async() => {

  const query = '*[_type=="product"]';
  const products =await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{
      bannerData, products
    }
  }
}

export default Home