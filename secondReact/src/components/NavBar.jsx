import CartWidget from './CartWidget';
import { Link } from "react-router-dom"
import SearchBar from './Searchbar';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand ms-4">Emerald Jewelry</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </Link>
              <ul className="dropdown-menu">
                <p className='p-items'>Tipos</p>
                <li><Link to={"/category/Brazaletes"} className="dropdown-item">Brazaletes</Link></li>
                <li><Link to={"/category/Collares"} className="dropdown-item">Collares</Link></li>
                <li><Link to={"/category/Anillos"} className="dropdown-item">Anillos</Link></li>
                <li><Link to={"/category/Aretes"} className="dropdown-item">Aretes</Link></li>
                <li><Link to={"/category/Relojes"} className="dropdown-item">Relojes</Link></li>
              </ul>
            </li>
          </ul>
            <div className="custom-width">
            <SearchBar/>
            </div>
        </div>
        <CartWidget />
      </div>
    </nav>

  )
}

export default NavBar;