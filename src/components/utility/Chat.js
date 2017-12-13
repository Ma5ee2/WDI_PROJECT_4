import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

const Chat = ({chat, message, handleMessageChange, handleMessageSubmit}) =>  {
  return(
    <div>
      <h1>Chat</h1>
      { chat.admin && <h3>Admin: <strong>{chat.admin.username}</strong></h3>}
      <div className="chat-div">
        { chat.messages && chat.messages.map((message, i) =>
          <div key={i}>
            <p><span><strong>{ message.user.username }</strong> { message.content }</span></p>
          </div>
        )}
      </div>
      <hr />
      {Auth.isAuthenticated() && <form onSubmit={handleMessageSubmit}>
        <input onChange={handleMessageChange} type="text" name="content" value={message.content} />
        <input type="submit" value="Send" />
      </form>}
    </div>
  )
}

export default Chat;
