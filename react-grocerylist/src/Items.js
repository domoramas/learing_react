import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Quantity from './Quantity'


class Items extends PureComponent {
  static propTypes = {
    changeQuantity: PropTypes.func,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isCompleted: PropTypes.bool,
  }
  render(){
    const {
      name,
      id,
      quantity,
      index,
      changeQuantity,
      removeItem,
      completeItem,
    } = this.props
    return(
      <div className="item">
        <span className="item-name">
        <button className="complete-item" onClick={() => completeItem(id)}>✔</button>
        <button className="remove-item" onClick={() => removeItem(id)}>✖</button>
        { name }
        </span>
        <Quantity 
        quantity = { quantity }
        index = {index}
        changeQuantity = {changeQuantity} />
      </div>
    )
  };
}
export default Items;