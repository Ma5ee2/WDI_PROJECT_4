import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';

class FoodbanksShow extends React.Component {
  state = {
    foodbank: {

    }
  }

  componentWillMount() {
    Axios
      .get(`/api/foodbanks/${this.props.match.params.id}`)
      .then(res => this.setState({ foodbank: res.data }))
      .catch(err => console.log(err));
  }

  deleteAlbum = () => {
    Axios
      .delete(`/api/foodbanks/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .then(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <BackButton />
          <h1>{this.state.foodbank.name}</h1>
          <img src={this.state.foodbank.image} className="img-responsive" />
          <h2>{this.state.foodbank.address}</h2>
          <h3>{this.state.foodbank.telephone_number}</h3>
          <Link to=""><h4>{this.state.foodbank.website}</h4></Link>
          <Link to=""><h4>{this.state.foodbank.email}</h4></Link>
          <hr/>
          <Link to={`/foodbanks/${this.state.foodbank.id}/edit`} className="standard-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>Edit
        </Link>
        <button className="main-button" onClick={this.deleteAlbum}>
          <i className="fa fa-trash" aria-hidden="true"></i>Delete
        </button>
      </div>
    </div>
  );
}
}

export default FoodbanksShow;
