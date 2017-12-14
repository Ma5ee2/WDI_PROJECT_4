import React                from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';
import Axios from 'axios';

class Navbar extends React.Component {
  state = {
    user: {},
    avatar: ''
  }

  logout() {
    event.preventDefault();
    Auth.removeToken();
    this.setState({ user: {} });
    this.props.history && this.props.history.push('/');
  }


  render(){
    let avatar;
    if (Auth.isAuthenticated()) avatar = Auth.getPayload().avatar;
    return(
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form className="form-inline">
          <Link to="/"><h1 className="website-name">FoodBank Donator</h1></Link>
          <h2 className="tagline">Help a foodbank near you.</h2>
          <div className="adding">
            {Auth.isAuthenticated() && <Link to="/foodbanks/new" className="standard-button">
            <i className="fa fa-plus" aria-hidden="true"></i>Add a foodbank
          </Link>}
          <div className="login-register">
            {!Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
            {' '}
            {!Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
            {' '}
            {Auth.isAuthenticated() && <img className="avatar" src={ avatar} />}
            {Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={() => this.logout()}> Logout</a>}
          </div>
        </div>
      </form>
    </nav>
  );
}
}

export default withRouter(Navbar);
