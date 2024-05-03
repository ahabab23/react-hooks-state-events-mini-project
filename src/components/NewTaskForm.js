import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); // State for task text
  const [category, setCategory] = useState(""); // State for task category

  // Handler for form submission
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setText(""); // Clear input after submission
    setCategory(""); // Clear category after submission
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text} // Use value attribute to make it a controlled component
          onChange={(e) => setText(e.target.value)} // Update text state on change
          name="text"
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category} // Use value attribute to make it a controlled component
          onChange={(e) => setCategory(e.target.value)} // Update category state on change
        >
          {categories.map(
            (category) =>
              category !== "All" && (
                <option key={category} value={category}>
                  {category}
                </option>
              )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
