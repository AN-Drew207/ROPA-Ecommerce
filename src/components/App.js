//@ts-check
import React, {useState, useEffect} from 'react' 
import NavbarComponent from './navbar/NavbarComponent';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Routes/Home';
import ProductsComponent from './Products/ProductComponent';
import ProductPageComponent from './Products/ProductPageComponent';
import Cart from './Cart/Cart';
import CartPurchased from './Cart/CartPurchased';
import ProductsSearchComponent from './Products/ProductsSearchComponent';
import Footer from './Footer/Footer';

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
  <>
  <NavbarComponent/>
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" exact component={Home}/>
    <Route path="/Cart" component={Cart}/>
    <Route path="/CartPurchased" component={CartPurchased}/>
    <Route path="/Search" component={ProductsSearchComponent}/>
    {   
      categories.map((category)=>{
        return(<Route path={"/Category/"+category} exact component={()=><ProductsComponent key={category} category={category}/>}/>
        )
      })
    }
    {
      products.map((product)=>{
        return(<Route path={"/Product/"+product.id} exact component={()=><ProductPageComponent key={product.id} id={product.id} title={product.title} image={product.image}  price={product.price} description={product.description}/>}/>
        )
      })
    }
  </Router>
  <Footer/>
  </>
 )
}

export default App