import React from 'react' 
import 'bootstrap/dist/js/bootstrap.min.js';
import sliderMain1 from '../../img/sliderMain1.jpg'
import sliderMain2 from '../../img/sliderMain2.png'
import sliderMain3 from '../../img/sliderMain3.png'

const SliderMainComponent = () =>{

 return( 
  <section id="sliderMain">
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
     <div className="carousel-inner">
        <div className="carousel-item active">
         <a href="/Category/men's clothing">
          <img src={sliderMain1} className="d-block w-100" alt="men clothing"/>
         </a>
        </div>
        <div class="carousel-item">
         <a href="/Category/electronics">
          <img  src={sliderMain2} className="d-block w-100" alt="electronics"/>
         </a>
        </div>
        <div class="carousel-item">
         <a href="/Category/women's clothing">
          <img  src={sliderMain3} className="d-block w-100" alt="women clothing"/>
         </a>
        </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
  </section>
 )
}

export default SliderMainComponent;