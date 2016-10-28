var React = require('react');

var TemplateComponent = require('./template.jsx');

function Directions(){
  return <p>Please Login</p>
}

var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var router = this.props.router;
    console.log('username', this.state.username);
    router.username = this.state.username;
    router.navigate('chat/', {trigger: true});
    // this.setState({username: ''});
  },
  render: function(){
    return (
      <form className="log-in-form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleUsername} type="text" name="name" value={this.state.username} placeholder='Username' />
        <button className='btn btn-success' type="submit" name="button">Log In</button>
      </form>
    )
  }
});

var LoginComponent = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <Directions />
        <LoginForm router={this.props.router}/>
      </TemplateComponent>
    );
  }
});

module.exports = {
  LoginComponent: LoginComponent
};
