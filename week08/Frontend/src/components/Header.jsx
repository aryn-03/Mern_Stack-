import { NavLink } from "react-router"

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-blue-600 h-20 shadow-lg">
      <NavLink to="/" className="text-white font-bold text-xl">
        User Manager
      </NavLink>
      <nav className="flex gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => `text-white font-semibold ${isActive ? 'border-b-2' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/adduser" 
          className={({ isActive }) => `text-white font-semibold ${isActive ? 'border-b-2' : ''}`}
        >
          Add User
        </NavLink>
        <NavLink 
          to="/users" 
          className={({ isActive }) => `text-white font-semibold ${isActive ? 'border-b-2' : ''}`}
        >
          Users List
        </NavLink>
      </nav>
    </div>
  )
}

export default Header