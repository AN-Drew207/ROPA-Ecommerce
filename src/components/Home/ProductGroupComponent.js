import React, {useState, useEffect} from 'react' 
import ProductGroupElement from '../Products/ProductGroupElement';

const ProductGroupComponent = (props) =>{
 const [products, setProducts]=useState([]);

 useEffect(() => {
  fetch(`${props.fetch}?limit=4`)
            .then(res=>res.json())
            .then(json=>{setProducts(json)})
 }, [])

 return(
  <section id={props.sectionid} className="container-fluid product-group p-5">
    <h3 className="title">{props.title}</h3>
    <div className="d-grid product-group-inner">
    {
      products.map(product=>{
        return(
          <ProductGroupElement
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        )
      })
    }
    </div>
  </section>
 )
}

export default ProductGroupComponent