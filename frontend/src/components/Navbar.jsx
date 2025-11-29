import { MdMenu } from 'react-icons/md'

const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="bg-white shadow-lg p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="text-gray-600 hover:text-gray-900 mr-4"
        >
          <MdMenu size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Weather Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
      </div>
    </nav>
  )
}

export default Navbar
