import React from 'react';

export default React.createClass({
  displayName: 'Total',
  render() {
    return (
      <div className='total'>
        <strong>Total: £{this.props.value.toFixed(2)}</strong>
      </div>
    )
  }
})
