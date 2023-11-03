import React, { Component } from "react";
import Cards from "./Cards";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { personajes: [] };
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <main>

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Rick & Morty</h1>
              <p className="lead text-body-secondary">
                Rick y Morty (en inglés: Rick and Morty) es una serie de
                televisión estadounidense de animación para adultos creada por
                Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se
                emitió en Cartoon Network. La serie sigue las desventuras de un
                científico, Rick Sanchez, y su fácilmente influenciable nieto,
                Morty, quienes pasan el tiempo entre la vida doméstica y los
                viajes espaciales, temporales e intergalácticos. Dan Harmon, el
                cocreador de la serie y Justin Roiland son los encargados de las
                voces principales de Morty y Rick, la serie también incluye las
                voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
              </p>
            </div>
          </div>
        </section>

        <Cards/>

      </main>

    );
  }
}

export default Main;