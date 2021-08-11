import React,  {useState, useEffect} from 'react';
import ProductGroupElement from './ProductGroupElement'

const ProductsSearchComponent =()=>{
    const [minPrice, setMinPrice]=useState();
    const [maxPrice, setMaxPrice]=useState();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const [index, setIndex]=useState(window.localStorage.getItem('search').toLowerCase())
    useEffect(()=>{
     fetch(`https://fakestoreapi.com/products`)
               .then(res=>res.json())
               .then(json=>{setIsLoading(false);setProducts(json.filter(product => product.title.toLowerCase().indexOf(index)!=-1))})  
    }, [])
   
   
   
   
    return( 
    isLoading ?
    <section className="Cart-Empty d-flex flex-column">
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden"></span>
        </div>
        <h3 className="text-dark">Loading...</h3>
    </section>
    :

    products.length===0 ?
    <section className="Cart-Empty">
    <div className="d-flex aling-items-center justify-content-center flex-column">
      <h1 className="text-center"><i class="bi bi-cart-x"></i></h1>
      <h3 className="text-center">There is not products with that name</h3>
    </div>
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
        <h3 className="text-center text-capitalize">{index}</h3>
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

   export default ProductsSearchComponent