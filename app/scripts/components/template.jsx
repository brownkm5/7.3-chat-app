var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="header well">
          <h1>Chat App</h1>
        </div>

        {this.props.children}

        <footer>
          <p classnName='well'>Kevin</p>
        </footer>
      </div>
    )
  }
});

module.exports = TemplateComponent;
