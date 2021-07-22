//@ts-check
import React, {useState, useEffect} from 'react' 
import NavbarComponent from './navbar/NavbarComponent';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Home from './Routes/Home';
import ProductsComponent from './Categories/ProductComponent';
import ProductPageComponent from './ProductPageComponent';
import Cart from './Cart/Cart';

const App = () =>{
  const [categories, setCategories]= useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))

  },[])

 return(
  <Router>
   <NavbarComponent/>
    <Switch>
    <Route path="/" exact component={Home}/>
    {   
      categories.map((category)=>{
        return(<Route path={"/Category/"+category}  component={()=><ProductsComponent key={category} category={category}/>}/>
        )
      })
    }
    {
      products.map((product)=>{
        return(<Route path={"/Product/"+product.id}  component={()=><ProductPageComponent key={product.id} id={product.id} title={product.title} image={product.image}  price={product.price} description={product.description}/>}/>
        )
      })
    }
    <Route path="/Cart" component={Cart}/>
   </Switch>
  </Router>
 )
}

export default App