import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

    function handleSearchChange(text) {
        setSearchText(text)
    }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

    const itemsToDisplay = items.filter((item) => {
        const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
        const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());

        if (categoryMatch && nameMatch) {
            return true;
        }

        return false;
    });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
