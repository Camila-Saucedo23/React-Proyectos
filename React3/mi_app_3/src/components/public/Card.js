import React from "react";
import { Link } from "react-router-dom";

const Card = ({ personaje }) => {
  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src={personaje.image}
          /> 
          <text/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />

          <div className="card-body">
            
           <div className="card-title">
             <h3> {personaje.name}</h3>
          </div>
          <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={`/details/${personaje.id}`} className="nav-link px-2 text-secondary">Detalle</Link>
              </button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;