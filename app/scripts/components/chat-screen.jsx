var React = require('react');

var TemplateComponent = require('./template.jsx');

var ChatForm = React.createClass({
  render:function(){
    return(
      <form className='chat-form'>
        <input type="text" name="message" />
        <button className='send btn btn-success' type="send-message" name="send">Send Message</button>
      </form>
    )
  }
});

var ChatComponent = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <h3>Hey {this.props.username}, Send a message!</h3>
        <ChatForm />
      </TemplateComponent>
    )
  }
});

module.exports = {
ChatComponent: ChatComponent
}
