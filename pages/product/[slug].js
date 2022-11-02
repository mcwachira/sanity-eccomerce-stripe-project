import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client'
import { getAllProducts } from '../../lib/api'
import {AiOutlineMinus, AiOutlinePLus, AiFillStar, AiOutlineStar, AiOutlinePlus} from 'react-icons/ai'
import { Product } from '../../components'
import { StateContext } from '../../context/stateContext'
import { useContext } from 'react'



const ProductDetails = ({product, products}) => {

  const { quantity,
    totalPrice,
    totalQuantities,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  onAdd,
  setShowCart,
 }  = useContext(StateContext)

    const [index, setIndex] = useState(0)
   const {image, name, details, price} = product;

   const handleBuyNow = () => {
    onAdd(product, quantity)

    setShowCart(true)
   }
  return (
  <div>
          <div className="product-detail-container">
        <div className="image-container">
            <div>
          <img src={urlFor(image && image[index])} alt="name" className='product-detail-image' />
</div>
            

       
         
          <div className="small-images-container">
            {image?.map((item, i) =>(
                <img key={i} src={urlFor(item)} className={i === index? 'small-image  selected-image': 'small-image'} onMouseEnter={() => setIndex(i)} alt="name" />
            ))}
          </div>
        </div>
          <div className="product-detail-desc">
            <h1>
                {name}
            </h1>
            <div className="reviews">

<AiFillStar/>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar/>

            </div>
            <p>
                {20}
            </p>
        
          <h4> Details :</h4>
          <p>
            {details}
          </p>
          <p className="price">
            ${price}
          </p>
          <div className="quantity">
            <h3> Quantity:</h3>

            <p className="quantity-desc">
                <span className="minus" onClick={() => decreaseQuantity()} >
                    <AiOutlineMinus/>
                </span>
                  <span className="num"  >
                    {quantity}
                  </span>
                  <span className="plus" onClick={() =>increaseQuantity()} >
                      <AiOutlinePlus />
                  </span>

            </p>
          </div>
          <div className="buttons">
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, quantity)}>
                Add To Cart
            </button>
              <button type='button' className='buy-now' onClick={handleBuyNow}>
                Buy Now
              </button>
          </div>

       
          </div>
          </div>

          <div className='maylike-products-wrapper'>
            <h2> You may also like </h2>
            <div className="marquee">
                <div className="maylike-products-container track">
                      {products.map((item) => (
                            <Product key={item._id}
                           product={item}/>
                      ))}
                </div>
            </div>
              
          </div>
  </div>
  )
}


export const getStaticPaths = async() => {
    const allProducts = await getAllProducts()
    const paths =allProducts.map((product) => ({
        params: {
            slug: product.slug


        }
    }))
 

    return {
        paths:paths || [],
        fallback:false,
    }
   
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async ({params}) => {

    const {slug} = params


    const query = `*[_type=="product" && slug.current=='${slug}'][0]`;

    //get list of similar products
    const productsQuery = '*[_type=="product"]';

    const product = await client.fetch(query);
    const products= await client.fetch(productsQuery);
  
 

    return {
        props: {
        products, product
        }
    }
}
export default ProductDetails