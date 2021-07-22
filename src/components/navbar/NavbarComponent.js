import React, {useState} from 'react' 
import logo from '../../img/logo.png'

const NavbarComponent = ()=>{
 const [displayList, setDisplayList]=useState(false)
 return (
  <>
   <nav id="nav" className="navbar navbar-expand-sm navbar-light">
    <div className="container-fluid">
     <a href="/ROPA-Ecommerce/"><img className="logo d-inline-block align-text-top " src={logo} alt="logo" /></a>
      <button className="navbar-toggler" onClick={()=>setDisplayList(!displayList)}>
      <i className="bi bi-list"></i>
    </button>
    </div>
    <div className="collapse navbar-collapse">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
       <a className="nav-link active" aria-current="page" href="/ROPA-Ecommerce/">Home</a>
      </li>
      <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/electronics">Electronics</a></li>
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/jewelery">Jewelery</a></li>
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/men's Clothing">Men's Clothing</a></li>
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/women's Clothing">Women's Clothing</a></li>
          </ul>
      </li>
      <li className="nav-item">
       <a className="nav-link d-flex active" aria-current="page" href="/Cart"><i className="bi bi-cart"></i> Cart</a>
      </li>
     </ul>
    </div>
   </nav>
   {
   displayList &&
   <div className="container-fluid bg-dark" id="hamburger-links"> 
    <ul className="navbar-nav d-flex flex-row justify-content-center">
      <li className="nav-item px-2">
       <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item dropdown px-2">
        <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/electronics">Electronics</a></li>
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/jewelery">Jewelery</a></li>
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/men's Clothing">Men's Clothing</a></li>
            <li><a className="dropdown-item" href="/ROPA-Ecommerce/Category/women's Clothing">Women's Clothing</a></li>
        </ul>
       </li>
      <li className="nav-item px-2">
       <a className="nav-link d-flex active" aria-current="page" href="/Cart"><i className="bi bi-cart"></i> Cart</a>
      </li>
    </ul>
   </div>
   }
  </>
 )
}

export default NavbarComponent