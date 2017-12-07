import React from 'react';
import Axios from 'react';

import FoodbanksForm from './FoodbanksForm';

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
      .post('/api/foodbanks', this.state.foodbank)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FoodbanksForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        foodbank={this.state.foodbank}
      />
    );
  }
}

export default FoodbanksEdit;
