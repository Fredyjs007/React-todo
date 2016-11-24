 var React = require('react');
 var TodoList = require('TodoList');
 var AddToDo = require('AddToDo');

 var TodoApp = React.createClass({
   getInitialState: function () {
     return {
       todos: [
         {
           id: 1,
           text: 'Have faith'
         }, {
           id: 2,
           text: 'Code & Read'
         },{
           id: 3 ,
           text: 'Go to Gym'
         },
         {
           id: 4,
           text: 'Smoke some dank Weed'
         }
       ]
     };
   },
   handleAddTodo: function (text) {
     alert('new todo: ' + text);
   },
   render: function () {
     var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddToDo onAddTodo={this.handleAddTodo}/>
      </div>
    )
   }
 });

 module.exports = TodoApp;
