var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var MessageCollection = require('./models/model.js').MessageCollection;
var LoginComponent = require('./components/login.jsx').LoginComponent;
var ChatComponent = require('./components/chat-screen.jsx');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat/': 'chat'
  },
  initialize: function(){
    this.username = '';
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),
      document.getElementById('app')
    );
  },
  chat: function(){
    var collection = new MessageCollection();
    collection.fetch();

    ReactDOM.render(
      React.createElement(ChatComponent, {collection: collection, username: this.username}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
