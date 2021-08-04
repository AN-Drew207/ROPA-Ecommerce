import React, {useState} from 'react'

const ProductPageComponent = (props) =>{
 const [descriptionButton, setDescriptionButton] = useState("bi bi-arrow-down-short")
 const [cant, setCant] = useState(1);

 const handleChange = () =>{
  if(descriptionButton==="bi bi-arrow-down-short"){
   setDescriptionButton("bi bi-arrow-up-short")
  }else{
   setDescriptionButton("bi bi-arrow-down-short")
  }
  console.log(descriptionButton)
 }

 const addCart =(e) =>{
  e.preventDefault();
  let cant=parseInt(document.getElementById('cant').value);
  let products=JSON.parse(window.localStorage.getItem('cart'));
  let repeated=false;
  let elementRepeated;
  for (let i in products){
    if(products[i].id===props.id){
      repeated=true;
      elementRepeated=i;
    }
  }
  if(repeated){
    products[elementRepeated].cant+=parseInt(cant);
    window.alert(`Se han agregado ${cant} ${products[elementRepeated].title}`)
    console.log(products[elementRepeated])
  }else{
    let productAux={...props, cant:cant};
    products={...products, [props.id]:productAux};
    window.alert(`You added ${cant} ${productAux.title} to the cart`)
    console.log(productAux)
  }
  
  window.localStorage.setItem('cart', JSON.stringify(products));
 }

 return(
  <div className="justify-content-center container-product bg-light">
   <div className="container-img-product">
    <img className="img-product-page img-fluid"  src={props.image} alt={props.title} />
   </div>
   <div className="container-content-product">
    <h3 className="fw-bold">{props.title}</h3>
    <div className="container d-flex flex-column">
     <h2>{props.price}$</h2>
     <div className="accordion accordion-flush" id="accordionFlushExample">
     <div className="accordion-item bg-transparent">
        <h2 className="accordion-header bg-transparent" id="flush-headingOne">
          <button className="btn collapsed description-button" onClick={handleChange} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Description  <i className={descriptionButton}></i>
          </button>
         </h2>
         <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
           <div className="accordion-body"><p>{props.description}</p></div>
         </div>
         <form action="" onSubmit={addCart}>
          <div className="container-add-cart">
           <button type="submit" className="btn add-cart">Add to Cart</button>
           <input type="number" id="cant" min={1} placeholder="Cant" value={cant} onChange={(e)=>setCant(e.target.value)}/>
          </div>
         </form>
       </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ProductPageComponent;