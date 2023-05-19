import { useState } from 'react';

const TaskModal = ({ closeModal }) => {
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    // Process the new task with the selected category
    // ...

    // Clear the input field and selected category
    setNewTask('');
    setSelectedCategory('');

    // Close the modal
    closeModal();
  };

  return (
    <div className="task-modal">
      <h2>Add New Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleTaskChange}
        placeholder="Enter task"
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
        {/* Add more category options here */}
      </select>
      <button onClick={handleSubmit}>Add Task</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default TaskModal;
