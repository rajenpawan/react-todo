var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the Yard'
        }, {
          id: 3,
          text: 'Complete Todo App with react'
        }, {
          id: 4,
          text: 'Prepare for Reactjs Interview'
        }

      ]
    };
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
      <TodoList todos = {todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
