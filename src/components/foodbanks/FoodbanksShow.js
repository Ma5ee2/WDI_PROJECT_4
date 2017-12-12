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
    latLng: {},
    chat: {},

    message: {
      content: ''
    }
  }

  componentWillMount() {
    Axios.all([
      Axios.get(`/api/foodbanks/${this.props.match.params.id}`),
      Axios.get(`/api/chats/${this.props.match.params.id}`)
    ]).then(Axios.spread((foodbank, chat) => {
      console.log(foodbank);
      console.log(chat);
      this.setState({ foodbank: foodbank.data, chat: chat.data })
    }))
    .catch(error => console.log(error));
  }

  deleteFoodbank = () => {
    Axios
    .delete(`/api/foodbanks/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
    .then(() => this.props.history.push('/'))
    .then(err => console.log(err));
  }

  handleMessageChange = ({ target: { value }}) => {
    this.setState({ message: { content: value } });
  }

  handleMessageSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/chats/${this.state.chat.id}/messages`, this.state.message, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        // const messages = this.state.chat.messages.concat(res.data.messages[res.data.messages.length -1]);
        // const chat     = Object.assign({}, this.state.chat, { messages: messages });
        //
        const message = Object.assign({}, this.state.message, { content: '' });
        this.setState({ chat: res.data, message });


      })
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <BackButton />
          <h1>{this.state.foodbank.name}</h1>
          <img src={this.state.foodbank.image} className="img-responsive"/>
          <hr/>
          { this.state.foodbank.location && <GoogleMap {...this.state} />}
          <h2>{this.state.foodbank.address}</h2>
          <h3>{this.state.foodbank.telephone_number}</h3>
          { this.state.foodbank.admin && <h3>{this.state.foodbank.admin.username}</h3> }
          <Link to=""><h4>{this.state.foodbank.website}</h4></Link>
          <Link to=""><h4>{this.state.foodbank.email}</h4></Link>
          <Chat
            chat={this.state.chat}
            handleMessageChange={this.handleMessageChange}
            handleMessageSubmit={this.handleMessageSubmit}
            message={this.state.message}
          />
          <hr/>
          {Auth.isAuthenticated() && <Link to={`/foodbanks/${this.state.foodbank.id}/edit`} className="standard-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>Edit
        </Link>}
        {' '}
        {Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteFoodbank}>
          <i className="fa fa-trash" aria-hidden="true"></i>Delete
        </button>}
      </div>
    </div>
  );
}
}

export default FoodbanksShow;
