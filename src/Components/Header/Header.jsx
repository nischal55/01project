import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [search,setSearch] =useState("");
  

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#40826D" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Dev Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mx-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={`/category/clothes`}>
                      Clothes
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to={`/category/Electronics`}>
                      Electronics
                    </Link>
                  </li>
                 
                  <li>
                    <Link className="dropdown-item" to={`/category/Furniture`}>
                      Furniture
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
        <div className="col-8 pt-2 pb-2  m-auto">
          <form className="d-flex mt-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Link className="btn btn-primary" style={{textDecoration:"none"}} to={`/Search/${search}`}>Search</Link>
          </form>
        </div>
      
     
    </>
  );
}

export default Header;
