import { useState } from "react";

function AddTaskForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    priority: "",
    brand: "",
    description: "",
    price: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.title.trim())
      newErrors.title = "Title is required";
    else if (form.title.length < 3)
      newErrors.title = "Minimum 3 characters";

    if (!form.priority)
      newErrors.priority = "Select priority";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onAdd({
      id: Date.now(),
      ...form,
      completed: false,
    });

    setForm({
      title: "",
      priority: "",
      brand: "",
      description: "",
      price: "",
      image: "",
    });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Product Name"
        value={form.title}
        onChange={handleChange}
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <input
        name="brand"
        placeholder="Brand"
        value={form.brand}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      {errors.priority && (
        <p className="error">{errors.priority}</p>
      )}

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;