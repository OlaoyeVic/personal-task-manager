import { NavLink } from "react-router-dom"
import './styles/sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header>
                <h3>Categories</h3>
                <hr />
            </header>
            <section>
                 <span>
                    <button style={{ckgroundColor: '#4CAF50'}}>Completed</button>
                </span>
                 <span>
                    <button style={{backgroundColor: '#FF5252'}}>Urgent</button>
                    </span>
                 <span>
                    <button style={{backgroundColor: '#FFC107'}}>Important</button>
                </span>
                 <span>
                    <button  style={{backgroundColor: '#9C27B0'}}>Later</button>
                </span>
                 <span>
                    <button  style={{backgroundColor: '#25A7B8'}}>To study</button>
                </span>
            </section>
            <footer className="desktop-sidebar-logout">
                <button>Add Category</button>
            </footer>
        </div>
    )
}
export default Sidebar