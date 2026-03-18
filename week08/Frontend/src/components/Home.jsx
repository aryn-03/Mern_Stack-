import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <h1 className="text-5xl font-bold mb-6 text-blue-600">Welcome to User Management</h1>
      <p className="text-xl text-gray-600 mb-8">Manage your users efficiently and effectively</p>
      <div className="flex gap-4">
        <Link to="/users" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Users
        </Link>
        <Link to="/adduser" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          Add New User
        </Link>
      </div>
    </div>
  )
}

export default Home