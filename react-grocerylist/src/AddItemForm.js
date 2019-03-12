import React from "react";
import PropTypes from "prop-types"

const AddItemForm = ({ addItem }) => {
 
 let itemInput = React.createRef();
 let handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemInput.current.value);
    e.currentTarget.reset();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref= { itemInput } 
        placeholder="Enter an item"
      />

        <input
          type="submit"
          value = "Add Item"
        />
    </form>

  );
}
AddItemForm.propTypes = {
  addItem: PropTypes.func,
}
export default AddItemForm;