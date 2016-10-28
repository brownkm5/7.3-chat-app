var React = require('react');
require('backbone-react-component');

var TemplateComponent = require('./template.jsx');
var MessageCollection = require('../models/model.js').MessageCollection;

var ChatForm = React.createClass({
  getInitialState: function(){
    return {
      content: ''
      // time: ''
    }
  },
  handleMessage: function(e){
    var message = e.target.value;
    this.setState({content: message});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.collection.create({content: this.state.content, username: this.props.username, time:new Date().getTime()});
    this.setState({content: ''});
    console.log('this.props.username', this.props);
  },
  render:function(){
    return(
      <form onSubmit={this.handleSubmit} className='chat-form'>
        <label htmlFor="message">Message </label>
        <input id='message' onChange={this.handleMessage} type="text" value={this.state.content} name="message" />
        <button className='send btn btn-success' type="send-message" name="send">Send Message</button>
      </form>
    )
  }
});

var ChatList = React.createClass({
  render: function(){
    var collection = this.props.collection;
    var chatList = collection.map(function(message){
      console.log('message', message);
      return (
        <li key={message.get('_id') || message.cid}>{message.get('username')}: {message.get('content')}
          Sent At:{message.get('time')}
        </li>
      )
    });

    return (
      <ul className='chatList'>
        {chatList}
      </ul>
    )
  }
});

var ChatComponent = React.createClass({
  getInitialState: function(){
    var collection = new MessageCollection;

    return{
      collection: collection
    };
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;

    setInterval(function(){
      collection.fetch().then(function(){
        self.setState({collection: collection});
      });
    }, 2000);

      collection.each(function(model){
        model.on('change', function(){self.update()});
      });
    // });

    collection.on('add', function(){self.update()});
    // console.log(collection);
  },
  componentWillUnmount: function(){
    clearInterval();
  },
  update: function(){
    this.forceUpdate();
  },
  render: function(){
    console.log(this);
    return (
      <TemplateComponent>
        <h3>Hey {this.props.username}, Send a message!</h3>
        <ChatList collection={this.state.collection} username={this.props.username}/>
        <ChatForm collection={this.state.collection} username={this.props.username}/>
      </TemplateComponent>
    )
  }
});

module.exports = {
ChatComponent: ChatComponent
}
