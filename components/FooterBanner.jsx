import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner }) => {
    // console.log(footerBanner)
    const { discount, largeText1, largeText2, saleTime , image, product , smallText, midText,desc, buttonText} = footerBanner
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>
                        {discount}
                    </p>
                    <p>
                        {largeText1}
                    </p>
                    <p>
                        {largeText2}
                    </p>
                    <p>
                        {saleTime}
                    </p>
                </div>

                <div className="right">
                    <p>
{smallText}
                    </p>
                    <p>
                        {midText}
                    </p>
                    <p>
                        {desc}
                    </p>

                    <Link href={`/product/${product}`}>
                        <button type='button'> {buttonText}</button>
                    </Link>
                  
                </div>
                <img src={urlFor(image)} alt={product} className='footer-banner-image' />
            </div>
        </div>
    )
}

export default FooterBanner  