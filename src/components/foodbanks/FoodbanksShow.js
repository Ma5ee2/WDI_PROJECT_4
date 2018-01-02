import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Chat from '../utility/Chat';
import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import GoogleMap from '../utility/GoogleMap';


class FoodbanksShow extends React.Component {
  state = {
    foodbank: {},
    latLng: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/foodbanks/${this.props.match.params.id}`)
      .then(res => this.setState({ foodbank: res.data }))
      .catch(err => console.log(err));
  }

  deleteFoodbank = () => {
    Axios
      .delete(`/api/foodbanks/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/'))
      .then(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <BackButton />
          <h1 className="foodbank-name-show">{this.state.foodbank.name}</h1>
          <div>
            <img src={this.state.foodbank.image} className="img-show img-thumbnail img-responsive"/>
            {Auth.getPayload() && this.state.foodbank.admin && Auth.getPayload().userId === this.state.foodbank.admin.id && <Link to={`/foodbanks/${this.state.foodbank.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit</Link>}
            <h2 className="foodbank-address-show">{this.state.foodbank.address}</h2>
            <h3 className="foodbank-telephone-show">{this.state.foodbank.telephone_number}</h3>
            <Link to=""><h4 className="foodbank-website-show">{this.state.foodbank.website}</h4></Link>
            <Link to=""><h4 className="foodbank-email-show">{this.state.foodbank.email}</h4></Link>
            {' '}
            {Auth.getPayload() && this.state.foodbank.admin && Auth.getPayload().userId === this.state.foodbank.admin.id && <button className="main-button" onClick={this.deleteFoodbank}>
              <i className="main-button fa fa-trash" aria-hidden="true"></i>Delete Foodbank
            </button>}
          </div>
        </div>
        <div className="google">
          <h1 className="foodbank-name-show">Map</h1>
          { this.state.foodbank.location && <GoogleMap {...this.state} />}
        </div>
        <div>
          { this.state.foodbank.admin && <h3 className="administrator">Added by: {this.state.foodbank.admin.username}</h3> }
          <hr/>
          <Chat foodBankId={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default FoodbanksShow;
