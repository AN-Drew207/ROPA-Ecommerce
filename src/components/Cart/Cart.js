import React, {useState, useEffect} from 'react'
import CartProduct from './CartProduct'

const Cart = () =>{
 const [productos, setProductos]=useState([])
 const [price, setPrice] = useState(0)
 const [cant, setCant] = useState({})

 useEffect(()=>{

  let cartProducts=JSON.parse(window.localStorage.getItem('cart'))
  let cartProductsFinal=[]
  let sum=0;
  let cants = {}
  for(let key in cartProducts){
   sum+=cartProducts[key].price*parseInt(cartProducts[key].cant);
   cartProductsFinal.push(cartProducts[key])
   cants[cartProducts[key].id]="";
  }
  console.log(cants)
  setCant(cants);
  setPrice(sum);
  setProductos(cartProductsFinal);
  
 },[])

 useEffect(()=>{
   let sum=0;
  for (let key in productos){
    sum+=productos[key].price*parseInt(productos[key].cant)
  }
  setPrice(sum)
  window.localStorage.setItem('cart', JSON.stringify(productos))
 },[productos])

 const removeItems=(productId)=>{
  let producto=[], allproducts=productos;
  for(let key in productos){
   if(productos[key].id===productId){
    producto=productos[key];
   }
  }
  if(cant[productId]<=producto.cant){ 
   producto.cant-=cant[productId]; 
   for(let key in productos){
     if(productos[key].id===productId){
       allproducts[key]=producto;
      }    
   }
  allproducts=allproducts.filter(product =>product.cant!==0);
  }else{
   window.alert ("You are trying to remove more than you have added")
  }
  setProductos(allproducts)
  setCant({...cant,[productId]:""});
  console.log(cant)
  console.log(allproducts)
 }

 const handleClick = (e) =>{
  e.preventDefault();
  let confirmar= window.confirm("Are you sure about your purchase?");
  if(confirmar){
    window.location.href= "/ROPA-Ecommerce/#/CartPurchased"
  }
 }

 return(
  price===0 ? 
  <section className="Cart-Empty">
    <div className="d-flex aling-items-center justify-content-center flex-column">
      <h1 className="text-center"><i class="bi bi-cart-x"></i></h1>
      <h3 className="text-center">Your Cart is empty</h3>
    </div>
  </section>
  :
  <section id="Cart" className="bg-light">
   {
     productos.map((product)=>{
      return(
      <div className="d-flex flex-row align-items-center justify-content-center container-fluid">
        <CartProduct
        product={product}
        />
       <div className="col-sm-6 price-content d-grid align-items-center justify-content-end">
        <h4 className="text-center">{product.price}$</h4>
        <div className="d-flex flex-column">
         <form action="" onSubmit={(e)=>{e.preventDefault();removeItems(product.id)}}>
          <div className="d-flex flex-row align-items-center justify-content-center">
           <button className="btn-cart btn btn-warning m-2 w-auto" type="submit" ><p className="m-0">Remove Items</p></button>
           <input className="w-25" value={cant[product.id]} onChange={(e)=>setCant({...cant,[product.id]:e.target.value})} type="number" min={1} placeholder="Cant"/>
          </div>
         </form>
         <div className="d-flex aling-items-center justify-content-center">
          <button onClick={()=>{setProductos(productos.filter(producto=>producto.id!==product.id))}} className="btn-cart btn btn-warning m-0 w-auto"><p className="m-0">Remove All</p></button>
         </div>
        </div>
        </div>
      </div>
     )
   })
  }
  <div className="d-flex flex-row justify-content-between p-5 price-container">
   <h3>Total</h3>
   <div className="d-flex flex-column justify-content-center align-items-center">
    <h3>{price}$</h3>
    <a className="text-decoration-none text-dark" onClick={handleClick} href=""><button className="btn btn-warning">Purchase</button></a>
  </div>
  </div>
 </section> 
 
 )
}

export default Cart;