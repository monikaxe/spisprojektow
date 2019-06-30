import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
      return (
          //pasek główny, bootstrap
          <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-4">
              <div className="container">
                  <Link to="/" className="navbar-brand">
                    Tytuł
                  </Link>
                  <button className="navbar-toggler"
                    type="button"
                    data-target="#navbarMain"
                    data-toggle="collapse"
                  >
                      <span className="navar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarMain">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                              <Link to="/" className="nav-link">
                                Strona Główna
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      )
    }
}
export default Navbar;