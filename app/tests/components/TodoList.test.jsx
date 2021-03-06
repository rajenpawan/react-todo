var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist TodoList.jsx', () => {
    expect(TodoList).toExist();
  });
  it('Should render one todo component for each todo item', () => {
    var todos = [{

      id:1,
      text: 'Do Something'
    }, {
      id: 2,
      text: 'Check Mail'
  }];
  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

  expect(todosComponents.length).toBe(todos.length);
  });
});
