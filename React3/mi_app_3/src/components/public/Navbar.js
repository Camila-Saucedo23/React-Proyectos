import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <span>
              <img
                className="App-logo"
                height="52"
                src="logo192.png"
                alt="animation"
              />
            </span>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
              <a className="nav-link px-2 text-white">
              <Link to="/">Home</Link>
                </a>
              </li>
              <li>
              <a className="nav-link px-2 text-white">
              <Link to="/About">About</Link>
                </a>
              </li>
              <li>
              <a className="nav-link px-2 text-white">
              <Link to="/Faq">FAQ</Link>
                </a>
                
              </li>
              <li>
                <a className="nav-link px-2 text-white">
                <Link to="/Pricing">Pricing</Link>
                </a>
               
              </li>
           
            
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
           <Link to= "/user-form" type="button" className="btn btn-warning">Sign Up</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};