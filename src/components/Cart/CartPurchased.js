import React, {useEffect} from 'react' 

const CartPurchased = () =>{

 useEffect(() => {
  window.localStorage.clear()
 }, [])

 return(
  <section className="Cart-Empty">
    <div className="d-flex aling-items-center justify-content-center flex-column">
      <h1 className="text-center"><i class="bi bi-cart"></i></h1>
      <h3 className="text-center">Your purchase has been processed. You will be notified when your product is on its way </h3>
    </div>
  </section>
 )
}

export default CartPurchased