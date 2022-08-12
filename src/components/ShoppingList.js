import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ onItemFormSubmit, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function checkSearchString(item) {
    const searchFilter = item.name.toUpperCase().indexOf(search.toUpperCase())
    console.log(searchFilter)
    return searchFilter > -1 ? true : false
  }

  const itemsToDisplay = items.filter((item) => {
    if (search === "") 
    if (selectedCategory === "All") return search==="" ? true : checkSearchString(item)

    if (item.category === selectedCategory) return search==="" ? true : checkSearchString(item)

    return false
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
