import React from 'react';

export default React.createClass({
  displayName: 'ItemForm',
  getDefaultProps() {
    return {
      item: {
        title: '',
        price: ''
      },
      buttonText: 'Add'
    };
  },
  onSubmit(e) {
    e.preventDefault()
    var item = Object.keys(this.refs)
      .reduce((obj, prop) => {
        obj[prop] = this.refs[prop].getDOMNode().value;
        this.refs[prop].getDOMNode().value = '';
        return obj;
      }, {});

    this.props.onSave(item);
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className="item-id" type='hidden' ref='id' defaultValue={this.props.item.id} />
        <input className="item-title" type='text' ref='title' defaultValue={this.props.item.title}/>
        <input className="item-value" type='text' ref='price' defaultValue={this.props.item.price}/>
        <button>{this.props.buttonText}</button>
      </form>
    )
  }
})
