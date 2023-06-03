import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={"./cart/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.title}</h2>
            <div>
            <h3>{this.props.item.bookauthor}</h3>
            <h3>{this.props.item.bookGenre}</h3>
            <h3>{this.props.item.bookdate}</h3>
            <h3>{this.props.item.bookLenght}</h3>
            <h4>{this.props.item.bookDescription}</h4>
            </div>
            <b>{this.props.item.price}р.</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem