import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

function User() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetchUser()
  }, [id])

  const fetchUser = async () => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:4000/user-api/users/${id}`)
      const data = await response.json()
      setUser(data.payload)
      setFormData(data.payload)
    } catch (err) {
      setError('Failed to fetch user: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:4000/user-api/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert('User updated successfully!')
        setIsEditing(false)
        fetchUser()
      }
    } catch (err) {
      alert('Error updating user: ' + err.message)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    try {
      const response = await fetch(`http://localhost:4000/user-api/users/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        alert('User deleted successfully!')
        navigate('/users')
      }
    } catch (err) {
      alert('Error deleting user: ' + err.message)
    }
  }

  if (loading) return <div className="text-center py-8">Loading user...</div>
  if (error) return <div className="text-red-600 text-center py-8">{error}</div>
  if (!user) return <div className="text-center py-8">User not found</div>

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">User Details</h2>
      
      {isEditing ? (
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="mb-4">
            <p className="text-gray-600">Name</p>
            <p className="text-2xl font-semibold">{user.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Email</p>
            <p className="text-xl">{user.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Mobile Number</p>
            <p className="text-xl">{user.mobileNumber || 'N/A'}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Date of Birth</p>
            <p className="text-xl">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => navigate('/users')}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default User