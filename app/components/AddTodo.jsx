  var React = require('react');

  var AddToDo = React.createClass({
      handleSubmit: function (e) {
      e.preventDefault();

      var task = this.refs.task.value;

      if (task.length > 0) {
        this.refs.task.value = '';
        this.props.onAddTodo(task);
      } else {
        this.refs.task.focus();
      }
    },
    render: function () {
      return (
        <div className="container__footer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="task" placeholder="What to do?"/>
            <button className="expanded button">Add Todo</button>
          </form>
        </div>
      );
    }
  });


  module.exports = AddToDo;
