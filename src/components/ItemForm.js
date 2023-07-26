import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
    const [itemName, setItemName] = useState('')
    const [category, setCategory] = useState("Produce")

    function  handleItemNameChange(event) {
        setItemName(event.target.value)
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newItem = {
            id: uuid(),
            name: itemName,
            category: category,
        }
        onItemFormSubmit(newItem)
        setItemName('')

        setCategory("Produce")
    }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleItemNameChange} type="text" name="name" value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
