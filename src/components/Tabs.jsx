import { useState } from 'react'
import './styles/tabs.scss'
import AllTab from '../components/AllTab'
import ActiveTab from '../components/ActiveTab'
import CompletedTab from '../components/CompletedTab'

const Tabs = ({ isModalOpen, closeModal }) => {
    const [activeIndex, setActiveIndex] = useState(1)
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState('')

    const handleClick = (index) => setActiveIndex(index)
    const checkActive = (index, className) => activeIndex === index ? className : ""

    const openModal = () => {
        closeModal();
    }

    const handleAddItem = () => {
        if (newTasks.trim() !== '') {
          const updatedItems = [...items, { text: newTasks, checked: false }];
          setTasks(updatedItems);
          localStorage.setItem('todoItems', JSON.stringify(updatedItems));
          setNewTasks('');
        }
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
                        <AllTab tasks={tasks} />
                    </button>
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => handleClick(2)}
                    >
                        <ActiveTab tasks={tasks} />
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => handleClick(3)}
                    >
                        <CompletedTab tasks={tasks} />
                    </button>
                </footer>
                {isModalOpen && (
                    <TaskModal closeModal={closeModal} addTask={addTask} categories={categories} />
                )}
            </div>
        </div>
    )
}
export default Tabs