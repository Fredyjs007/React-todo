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
           text: 'Have faith',
           completed: true
         }, {
           id: uuid(),
           text: 'Code & Read',
           completed: false
         },{
           id: uuid() ,
           text: 'Go to Gym',
           completed: false
         },
         {
           id: uuid(),
           text: 'Smoke some dank Weed',
           completed: false
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
           text: text,
           completed: false
         }
       ]
     });
   },
   handleToggle: function (id) {
     var updatedTodos = this.state.todos.map((todo) => {
       if (todo.id === id) {
         todo.completed = !todo.completed;
       }

       return todo;
     });

     this.setState({todos: updatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo onAddTodo={this.handleAddTodo}/>
      </div>
    )
   }
 });

 module.exports = TodoApp;
