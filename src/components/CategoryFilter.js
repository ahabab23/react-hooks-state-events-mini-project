import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((item) => (
        <button
          key={item}
          className={selectedCategory === item ? "selected" : ""}
          onClick={() => {
            setSelectedCategory(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
