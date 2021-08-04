import React,  {useState, useEffect} from 'react';
import ProductGroupElement from './ProductGroupElement'

const ProductsComponent = (props)=>{
 const [minPrice, setMinPrice]=useState();
 const [maxPrice, setMaxPrice]=useState();
 const [products, setProducts] = useState([]);
 const [isLoading, setIsLoading]= useState(true);
 useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/category/${props.category}`)
            .then(res=>res.json())
            .then(json=>{setIsLoading(false);setProducts(json)})
 }, [])




 return( 
  isLoading ?
  <section className="Cart-Empty d-flex flex-column
  ">
      <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden"></span>
      </div>
      <h3 className="text-dark">Loading...</h3>
  </section>
  :
  <section className="category">
    <div className="filters-collapse">
     <p className="text-center results">{products.length} results |</p>
     <h5>Price</h5>
     <div className="d-flex flex-row justify-content-center">
       <form action="" >
           <input type="number" className="input" onChange={(e)=>setMinPrice(e.target.value)} placeholder="Min" value={minPrice}/>-
           <input type="number" className="input" onChange={(e)=>setMaxPrice(e.target.value)} placeholder="Max" value={maxPrice}/>
       </form>
     </div>
    </div>
   <div className="container-fluid justify-content-center d-flex flex-row">
    <div className="col-2 filters">
     <h3 className="text-center text-capitalize">{props.category}</h3>
     <p className="text-center results">{products.length} results</p>
     <h5>Price</h5>
     <div className="d-flex flex-row justify-content-center">
       <form action="" >
           <input type="number" className="input" onChange={(e)=>setMinPrice(e.target.value)} placeholder="Min" value={minPrice}/>-
           <input type="number" className="input" onChange={(e)=>setMaxPrice(e.target.value)} placeholder="Max" value={maxPrice}/>
       </form>
     </div>
    </div>
    {
      <div className="col-10 product-group product-group-inner">
      {
      products.filter((product)=>{
        if(minPrice&&maxPrice){
        return product.price<maxPrice && product.price>minPrice;
        }else if(minPrice){
          return product.price>minPrice;
        }else if(maxPrice){
          return product.price<maxPrice;
        }else{
          return product
        }
      }).map((product)=>
        <ProductGroupElement
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
        />
      )     
      }
      </div>
   }
   </div>
  </section> 
 )
}

export default ProductsComponent;