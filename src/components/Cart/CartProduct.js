import React from 'react' 

const CartProduct = (props) =>{
 const {title, image, cant}=props.product;
 return( 
  <>
   <div className="container-product-cart col-sm-6 col-6">
   <div className="p-3 col-6">
    <img className="img-fluid img-product-cart" src={image} alt={title} />
   </div>
   <div className="d-flex flex-column justify-content-center col-6">
        <h3 className="fw-bold">{title}</h3>
        <h5>Cant: {cant}</h5>
   </div>
   </div>
  </>
 )
}

export default CartProduct;