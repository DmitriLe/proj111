import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./cart/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}р.</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >+</div>
        </div>
    )
  }
}

export default Item