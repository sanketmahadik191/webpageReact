/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import styles from"./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar =() =>{
    return(<>
<nav class="navbar navbar-expand-lg bg-body-tertiary"  id="nav">
  <div class="container-fluid" id="back">
    <a class="navbar-brand" href="#" id="logos">GeekFoods</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="selected" aria-current="page" href="#">Quote</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resturants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Foods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <button id='hide'type="button" class="btn btn-primary">Primary</button>
  </div>
</nav>
  </> )
}

export default Navbar;