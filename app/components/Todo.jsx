  var React = require('react');

  var Todo = React.createClass({
    render: function () {
      var {id ,text, completed} = this.props;
      return (
        <div onClick={(onToggle) => {
            this.props.onToggle(id);
          }}>
          <input type="checkbox" readOnly checked={completed}/>
         {text}
        </div>
      )
    }
  });

  module.exports = Todo;
