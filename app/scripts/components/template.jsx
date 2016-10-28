var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div className='contain'>
        <div className="header well">
          <h1>Chat App</h1>
        </div>

        {this.props.children}

        <footer>
          <p className='well'>kevin</p>
        </footer>
      </div>
    )
  }
});

module.exports = TemplateComponent;
