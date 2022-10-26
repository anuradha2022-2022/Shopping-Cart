import React from 'react'
import './productList.css';

const ProductList = ({ product , addtocart }) =>{
  return (
     <div className = 'flex' >
      {
        product.map( ( productItem,productIndex) =>
        {
          return(
            <div style = { { width: '30%' } }>
               <div className = 'product-item'>
                  <img className='image' src = { productItem.url } width='100%'/>
                  <p id="product-name"> { productItem.name } </p> 
                  <p> Rs.{ productItem.price } /-</p>
                  <button onClick = { () =>  addtocart (productItem) }>
                      Add to Cart</button>
              </div>
          </div>
          )
        })
      }
    </div> 
  )
}

export default ProductList