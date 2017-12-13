import React                from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';


const Navbar = ({history}) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/')
  }

  return(
    <nav>
      <Link to="/"><h1 className="website-name">FoodBank Donator</h1></Link>
      <h2 className="tagline">Help a foodbank near you.</h2>
      <div className="login-register">
        {!Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
        {' '}
        {!Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
        {' '}
        {Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a>}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
