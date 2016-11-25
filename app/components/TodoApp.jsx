 var React = require('react');
 var TodoList = require('TodoList');
 var AddToDo = require('AddToDo');
 var TodoSearch = require('TodoSearch');
 var uuid = require('node-uuid');

 var TodoApp = React.createClass({
   getInitialState: function () {
     return {
       showCompleted: false,
       searchText: '',
       todos: [
         {
           id: uuid(),
           text: 'Have faith'
         }, {
           id: uuid(),
           text: 'Code & Read'
         },{
           id: uuid() ,
           text: 'Go to Gym'
         },
         {
           id: uuid(),
           text: 'Smoke some dank Weed'
         }
       ]
     };
   },
   handleAddTodo: function (text) {
     this.setState({
       todos: [
         ...this.state.todos,
         {
           id: uuid(),
           text: text
         }
       ]
     });
   },
   handleSearch: function (showCompleted, searchText) {
     this.setState({
       showCompleted: showCompleted,
       searchText: searchText.toLowerCase()
     });
   },
   render: function () {
     var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddToDo onAddTodo={this.handleAddTodo}/>
      </div>
    )
   }
 });

 module.exports = TodoApp;
