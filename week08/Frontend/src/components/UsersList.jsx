import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:4000/user-api/users')
      const data = await response.json()
      setUsers(data.payload || [])
    } catch (err) {
      setError('Failed to fetch users: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    
    try {
      const response = await fetch(`http://localhost:4000/user-api/users/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        alert('User deleted successfully!')
        fetchUsers()
      }
    } catch (err) {
      alert('Error deleting user: ' + err.message)
    }
  }

  if (loading) return <div className="text-center py-8">Loading users...</div>
  if (error) return <div className="text-red-600 text-center py-8">{error}</div>

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Users List</h2>
      {users.length === 0 ? (
        <div className="text-center py-8">No users found. <Link to="/adduser" className="text-blue-600 underline">Add one now</Link></div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Mobile</th>
                <th className="border p-3 text-left">DOB</th>
                <th className="border p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="border p-3">{user.name}</td>
                  <td className="border p-3">{user.email}</td>
                  <td className="border p-3">{user.mobileNumber || 'N/A'}</td>
                  <td className="border p-3">{new Date(user.dateOfBirth).toLocaleDateString()}</td>
                  <td className="border p-3 text-center">
                    <Link to={`/users/${user._id}`} className="px-3 py-1 bg-blue-600 text-white rounded mr-2 hover:bg-blue-700">
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default UsersList