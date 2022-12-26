import React from "react";


function Header() {

  return (<div className="header sticky">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
              <a className="navbar-brand"><h2>Morfit</h2></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navitems" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="/"><h5>Home</h5> <span class="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#about"><h5>About</h5></a>
                  <a className="nav-item nav-link" href="#projects"><h5>Projects</h5></a>
                  <a className="nav-item nav-link" href="#contacts"><h5>Contact</h5></a>
                </div>
              </div>
            </nav>
  </div>)
  
}

export default Header;