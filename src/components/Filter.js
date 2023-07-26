import React, { useState } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
    const [searchText, setSearchText] = useState(search);

    function handleSearchText(event) {
        const text = event.target.value;
        setSearchText(text);
        onSearchChange(text);
    }

    if (searchText !== search) {
        setSearchText(search);
    }

    return (
        <div className="Filter">
            <input
                onChange={handleSearchText}
                type="text"
                name="search"
                placeholder="Search..."
                value={searchText}
            />
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
}

export default Filter;