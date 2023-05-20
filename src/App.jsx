import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Tabs from './components/Tabs'
import Sidebar from './components/Sidebar'

function App() {
  const [categories, setCategories] = useState([
    'Completed',
    'Urgent',
    'Important',
    'Later Today'
  ])

  const addNewCategory = (category) => {
    setCategories([...categories, category])
  }

  return (
    <div className='app'>
        <h2>PERSONAL TASK MANAGER</h2>
        <div className='containers'>
          <aside>
            <Sidebar 
              categories={categories} 
              setCategories={setCategories} 
              addNewCategory={addNewCategory}
            />
          </aside>
          <main>
            <Tabs categories={categories} />
          </main>
        </div>
    </div>
  )
}

export default App
