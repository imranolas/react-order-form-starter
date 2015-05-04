import React from 'react';
import ItemForm from './item-form'

export default React.createClass({
  displayName: 'ProductList',
  getInitialState() {
    return {
      isEditing: false
    }
  },
  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  },
  render() {
    var item = this.props.item;
    return (
      <div>
        { this.state.isEditing ?
          <ItemForm
            item={item}
            buttonText="Update"
            onSave={(item) => {
              this.props.update(item);
              this.toggleEdit();
            }} />
        :
          <div className='item' onClick={this.toggleEdit}>
            <span>{item.title}</span>
            <span>£{parseFloat(item.price).toFixed(2)}</span>
            <span className='button' onClick={(e) => {
              e.stopPropagation();
              this.props.remove(item.id);
            }}>x</span>
          </div>
        }
      </div>
    );
  }
})
