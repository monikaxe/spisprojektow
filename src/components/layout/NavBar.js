import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {firebaseConnect} from "react-redux-firebase";

class Navbar extends Component {
    state={
        isAuth: false
    }

    static getDerivedStateFromProps(props, state) {
        const {auth}=props;

        if(auth.uid) {
            return {isAuth:true}
        } else{
            return {isAuth:false}
        }
    }

    onLogoutClick=(e)=>{
        e.preventDefault();
        const {firebase}=this.props;
        firebase.logout();
    }


    render() {
      const {isAuth}=this.state;
      const {auth}=this.props;
      return (
          //pasek główny, bootstrap
          <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-4">
              <div className="container">
                  <Link to="/" className="navbar-brand">
                    Spis projektów
                  </Link>
                  <button className="navbar-toggler"
                    type="button"
                    data-target="#navbarMain"
                    data-toggle="collapse"
                  >
                      <span className="navar-toggler-icon"> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarMain">
                      <ul className="navbar-nav mr-auto">

                          {isAuth ? (
                              <li className="nav-item">
                                  <Link to="/" className="nav-link">
                                      Strona Główna
                                  </Link>
                              </li>
                          ) : null}

                      </ul>
                      {isAuth ? (
                         <ul className="navbar-nav ml=auto">
                             <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    {auth.email}
                                </a>
                             </li>
                             <li className="nav-item">
                                 <a href="#!" className="nav-link" onClick={this.onLogoutClick}>
                                     Logout
                                 </a>
                             </li>
                         </ul>

                      ) : null}

                  </div>
              </div>
          </nav>
      )
    }
}
Navbar.propTypes= {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};
export default compose(
    firebaseConnect(),
    connect((state, props)=> ({
    auth: state.firebase.auth}
))
)(Navbar);