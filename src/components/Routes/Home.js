import React from 'react' 
import SliderMainComponent from '../Home/SliderMainComponent'
import ProductGroupComponent from '../Home/ProductGroupComponent'

const Home = () =>{
 return(
  <>
   <SliderMainComponent/>
   <ProductGroupComponent
    fetch="https://fakestoreapi.com/products/category/electronics"
    title="Electronics"
    sectionid="Electronics"
   />
   <ProductGroupComponent
    fetch="https://fakestoreapi.com/products/category/jewelery"
    title="Jewelery"
    sectionid="Jewelery"
   />
   <ProductGroupComponent
    fetch="https://fakestoreapi.com/products/category/women's clothing"
    title="Women's Clothing"
    sectionid="WomensClothing"
   />
   <ProductGroupComponent
    fetch="https://fakestoreapi.com/products/category/men's clothing"
    title="Men's Clothing"
    sectionid="MensClothing"
   />
  </>
 )
}

export default Home