import { MdDashboard, MdTableChart } from 'react-icons/md'

const Sidebar = ({ isOpen, onNavigate }) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-white border-r shadow-lg transition-all duration-300 overflow-hidden`}
    >
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">Weather App</h2>
        </div>

        <nav className="space-y-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full flex items-center space-x-3 p-3 rounded-lg transition-colors bg-blue-500 text-white"
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => onNavigate('tables')}
            className="w-full flex items-center space-x-3 p-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            <MdTableChart size={20} />
            <span>Tables</span>
          </button>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
