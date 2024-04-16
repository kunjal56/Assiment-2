import React from 'react'

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">K'cafe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Pizza</a></li>
            <li><a class="dropdown-item" href="#">Burger</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Noodles</a></li>
            <li><a class="dropdown-item" href="#">Pav Bhaji</a></li>
          </ul>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tse1.mm.bing.net/th?id=OIP.LdbEMpucd3-auAfc9C-F9AHaEo&pid=Api&P=0&h=180" class="d-block w-100" style={{height: "500px" }}/>
    </div>
    <div class="carousel-item">
      <img src="https://tse2.mm.bing.net/th?id=OIP.0oxj3VmnKpubozug9A2_rAHaEK&pid=Api&P=0&h=180" class="d-block w-100" style={{height: "500px" }}/>
    </div>
    <div class="carousel-item">
      <img src="https://tse2.mm.bing.net/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&pid=Api&P=0&h=180" class="d-block w-100" style={{height: "500px" }}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgN8HyjYXTO2VfkVSCoQYdOQ8AYd5F40giz0PRI_pMA&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Pizza</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Order Now</a>
  </div>

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgN8HyjYXTO2VfkVSCoQYdOQ8AYd5F40giz0PRI_pMA&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Pizza</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Order Now</a>
  </div>
  
</div>

    </div>
  )
}

export default Home
