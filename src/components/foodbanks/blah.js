import React from 'react';
import Axios from 'react';

import FoodbanksForm from './FoodbanksForm';
import Auth from '../../lib/Auth';

class FoodbanksEdit extends React.Component {
  state = {
    foodbank: {
      image: '',
      name: '',
      address: '',
      telephone_number: '',
      website: '',
      email: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const foodbank = Object.assign({}, this.state.foodbank, { [name]: value });
    this.setState({ foodbank });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/foodbanks/${this.props.match.params.id}`, this.state.foodbank, {
        headers: { 'Authorization': `Bearer ${Auth.getToken(res.data.id)}` }
      })
      .then(() => this.props.history.push(`/foodbanks/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FoodbanksForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        foodbank={this.state.foodbank}
      />
    );
  }
}

export default FoodbanksEdit;
