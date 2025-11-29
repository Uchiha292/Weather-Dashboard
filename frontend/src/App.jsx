import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar isOpen={sidebarOpen} onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-6">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'tables' && <Dashboard showTables={true} />}
        </main>
      </div>
    </div>
  )
}

export default App
