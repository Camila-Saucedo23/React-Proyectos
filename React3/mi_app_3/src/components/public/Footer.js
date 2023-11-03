import React, { useState } from "react";

export const Footer = () => {
  const [Click, setClick] = useState(0);
  const year = new Date().getFullYear();
  const conmpanyName = "San Juan Dev";

  const handleClick = () => {
    setClick(Click + 1);
  };
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">
        &copy; {year} {conmpanyName} Clicks= {Click}
      </p>

      <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      onClick={handleClick}
      >
        
        <img className="App-logo" height="52" src="logo192.png" alt="animation" />
      </span>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            About it
          </a>
        </li>
      </ul>
    </footer>
  );
};