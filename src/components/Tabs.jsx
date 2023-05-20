import { useState } from 'react'
import './styles/tabs.scss'
import AllTab from '../components/AllTab'
import ActiveTab from '../components/ActiveTab'
import CompletedTab from '../components/CompletedTab'
import TaskModal from './TaskModal'

const Tabs = ({ categories }) => {
    const [activeIndex, setActiveIndex] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleClick = (index) => setActiveIndex(index)
    const checkActive = (index, className) => activeIndex === index ? className : ""

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const handleTaskChange = (event) => {
        setNewTask(event.target.value);
      };
    
      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      }

      const handleSubmit = () => {
        // Process the new task with the selected category
        // ...
    
        // Clear the input field and selected category
        setNewTask('');
        setSelectedCategory('');
    
        // Close the modal
        closeModal();
      }

      const AddTaskButton = () => {
        const handleAddTask = () => {
          openModal();
        };
    
        return (
          <button className="add-task-button" onClick={handleAddTask}>
            Add Task
          </button>
        );
      }


    return (
        <div className="tabs">
            <div className="mobile-tabs">
                <header>
                    <span>5 tasks</span>
                    <span>
                        <button>Add new tasks</button>
                    </span>
                    <span>
                        <button>Clear Completed</button>
                    </span>
                </header>
            </div>
            <div className="desktop-tabs">
                <header>
                    <span style={{fontSize: '20px', lineHeight: '27px'}}>5 tasks</span>
                    <span>
                        <button 
                            style={{
                                backgroundColor: '#38938A', 
                                width: '200px', 
                                height: '31px', 
                                borderRadius: '10px'
                            }}
                            onClick={openModal}
                        >
                            Add new tasks
                        </button>
                    </span>
                    <span>
                        <button 
                            style={{
                                background: 'none', 
                                color: '#1D8A8A'
                            }}
                        >
                            Clear Completed
                        </button>
                    </span>
                </header>
                <hr />
                <section></section>
                <footer>
                    <button
                        className={`tab ${checkActive(1, "active")}`}
                        onClick={
                            () => handleClick(1)

                        }
                    >
                        <AllTab />
                    </button>
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => handleClick(2)}
                    >
                        <ActiveTab />
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => handleClick(3)}
                    >
                        <CompletedTab />
                    </button>
                </footer>
                {isModalOpen && (
                    <TaskModal
                    closeModal={closeModal}
                    newTask={newTask}
                    handleTaskChange={handleTaskChange}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    handleSubmit={handleSubmit}
                    categories={categories}
                    />
                )}
            </div>
        </div>
    )
}
export default Tabs