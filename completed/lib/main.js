import React from 'react';
window.React = React;

import ProductList from './product-list';
import ItemForm from './item-form';
import Total from './total';

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
  addItem(item) {
    item.id = uuid.v1();
    var items = this.state.items
    .concat([item]);

    this.setState({items: items});
  },
  removeItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    })
  },
  updateItem(itemToUpdate) {
    var items = this.state.items
    .map(function(item) {
      if(item.id === itemToUpdate.id) {
        return itemToUpdate;
      } else {
        return item;
      }
    });

    this.setState({items: items})
  },
  render: function() {
    return (
      <div className='main'>
        <ProductList
          items={this.state.items}
          removeItem={this.removeItem}
          updateItem={this.updateItem} />
        <Total value={
            this.state.items.reduce(function(total, item) {
              return (parseFloat(item.price) || 0) + total;
            }, 0)
          }/>
        <ItemForm onSave={this.addItem} />
      </div>
    );
  }
});

React.render(<App />, document.body);
