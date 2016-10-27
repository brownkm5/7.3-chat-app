var React = require('react');

var TemplateComponent = require('./template.jsx');

function Directions(){
  return <p>Hey kevin, send a message!</p>
}

var ChatComponent = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <Directions />
      </TemplateComponent>
    )
  }
});

module.exports = ChatComponent;
