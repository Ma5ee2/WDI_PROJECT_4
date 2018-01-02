import React from 'react';
import Axios from 'axios';
import socketIOClient from 'socket.io-client';

import Auth from '../../lib/Auth';

class Chat extends React.Component {
  webSocket = socketIOClient('/socket');

  state = {
    chat: {},

    message: {
      content: ''
    },
    user: {
      avatar: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/chats/${this.props.foodBankId}`)
      .then(res => this.setState({ chat: res.data }))
      .catch(err => console.log(err));

    this.webSocket.on('MESSAGE', newMessage => {
      const chat = Object.assign({}, this.state.chat, { messages: this.state.chat.messages.concat(newMessage)});
      this.setState({ chat, message: { content: '' } });
    });
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
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="chatting">
          <h1 className="chat">Chat</h1>
          {this.state.chat.admin && <h3 className="admin">Admin: <strong>{this.state.chat.admin.username}</strong></h3>}
        </div>
        <div className="chat-div">
          { this.state.chat.messages && this.state.chat.messages.map((message, i) =>
            <div key={i}>
              <p><span><strong>{ message.user.username }:</strong> { message.content }</span></p>
            </div>
          )}
        </div>
        <hr />
        <div className="chat-container">
          {Auth.isAuthenticated() && <form onSubmit={this.handleMessageSubmit}>
            <input className="chat-input" onChange={this.handleMessageChange} type="text" name="content" value={this.state.message.content} />
            <input className="main-button" type="submit" value="Send" />
          </form>}
        </div>
      </div>
    );
  }
}

export default Chat;
