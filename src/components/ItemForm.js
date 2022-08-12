import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleNameChange(event) {
    setItemName(event.target.value)
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem)
    setItemName("")
    setItemCategory("Produce")
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
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
