import React from 'react'

const ProductGroupElement = (props) =>{
 return(
  <div key={props.id} className="card m-2">
   <a className="card-link" href={"/#/ROPA-Ecommerce/Product/"+props.id}>
    <img src={props.image} className="card-img-top" alt={props.title}/>
    <div className="card-body">
     <h5 className="card-title fw-bold">{props.price}$</h5>
     <p className="card-text">{props.title}</p>
    </div>
   </a>
  </div>
 )
}

export default ProductGroupElement;