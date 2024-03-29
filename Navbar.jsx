import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
        <a class="navbar-brand col-lg-3 me-0" href="#" > 
        
        <h3>
            Foodie
            </h3>
            
            </a>
            
        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
          <li class="nav-item">
            <a class="nav-link " >Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >Our Deals</a>
          </li>
         <li class="nav-item">
            <a class="nav-link">Contact Us</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" >Check Out</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar
