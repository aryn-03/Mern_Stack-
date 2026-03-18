import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    mobileNumber: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('http://localhost:4000/user-api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('User added successfully!')
        navigate('/users')
      } else {
        setError('Failed to add user')
      }
    } catch (err) {
      setError('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Add New User</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
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
            placeholder="Enter mobile number"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </form>
    </div>
  )
}

export default AddUser