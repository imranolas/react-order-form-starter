import React from 'react';
import Product from './product';

export default React.createClass({
  displayName: 'Products',
  render() {
    var items = this.props.items
    .map((item) => {
      return (
        <li>
          <Product
            item={item}
            remove={this.props.removeItem}
            update={this.props.updateItem} />
        </li>
      )
    })
    return (
      <ul>
        {items}
      </ul>
    );
  }
})
