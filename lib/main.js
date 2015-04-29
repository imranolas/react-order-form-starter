import React from 'react';

// Expose React for dev tools
window.React = React;

// A module for generating a unique id
import uuid from 'uuid';

var App = React.createClass({
  displayName: 'App',
  getInitialState() {
    return {
      items: [
        {id: '1', title: 't-shirt', price: 10}
      ]
    }
  },
  addItem(item) { /* add item logic */ },
  removeItem(id) { /* remove item logic */ },
  updateItem(item) { /* update item logic */ },
  render() {
    return (
      <div className='main'>
        Hello World!
      </div>
    )
  }
});


React.render(<App />, document.body);
