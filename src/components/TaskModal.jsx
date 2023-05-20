import { useState } from 'react';
import './styles/taskmodal.scss'

const TaskModal = ({ closeModal }) => {
  const [newTask, setNewTask] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

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
        <div className='mobile-task-modal'></div>
        <div className='desktop-task-modal'>
            <div onClick={closeModal} className='desktop-overlay'></div>
            <div className='desktop-content'>
                <>
                    <h2>Create Task</h2>
                </>
                <>
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleTaskChange}
                        placeholder="Task Description"
                    />
                </>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    <option value="Category 1">Completed</option>
                    <option value="Category 2">Urgent</option>
                    <option value="Category 3">Important</option>
                    <option value="Category 4">Later</option>
                    <option value="Category 5">To study</option>
                </select>
                <>
                    <button onClick={handleSubmit}>Submit Task</button>
                </>
            </div>
        </div>
    </div>
  );
};

export default TaskModal;



{/* <h2>Add New Task</h2>
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
</select>
<button onClick={handleSubmit}>Add Task</button>
<button onClick={closeModal}>Cancel</button> */}