import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminPanel.css';

const categories = [
  { label: 'Nails Parlour', value: 'nails' },
  { label: 'Beauty Shop', value: 'beauty' },
  { label: 'Men Fashion', value: 'men' },
  { label: 'Women Fashion', value: 'women' },
  { label: 'Kids Fashion', value: 'kids' },
  { label: 'Photo Studio', value: 'studio' },
];

const AdminPanel = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('nails');
  const [form, setForm] = useState({ name: '', price: '', image: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) navigate('/admin-login');

    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => toast.error("Failed to fetch products"));
  }, [navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedFile) return null;
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      return `/uploads/${res.data.filename}`;
    } catch (err) {
      toast.error("Image upload failed");
      return null;
    }
  };

  const handleSubmit = async () => {
    const imageUrl = await uploadImage();

    if (!imageUrl && !editingId) {
      toast.warn("Upload an image");
      return;
    }

    const productData = {
      name: form.name,
      price: form.price,
      image: imageUrl || form.image,
      category: selectedCategory,
    };

    if (editingId) {
      axios.put(`http://localhost:5000/api/products/${editingId}`, productData)
        .then(() => {
          setProducts(prev =>
            prev.map(p => (p._id === editingId ? { ...p, ...productData } : p))
          );
          toast.success("Product updated");
          resetForm();
        });
    } else {
      axios.post('http://localhost:5000/api/products', productData)
        .then(res => {
          setProducts(prev => [...prev, res.data]);
          toast.success("Product added");
          resetForm();
        });
    }
  };

  const resetForm = () => {
    setForm({ name: '', price: '', image: '' });
    setSelectedFile(null);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(prev => prev.filter(p => p._id !== id));
        toast.success("Product deleted");
      });
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setEditingId(product._id);
    setSelectedCategory(product.category);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    toast.info("Logged out");
    navigate('/admin-login');
  };

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          {categories.map(cat => (
            <li
              key={cat.value}
              className={cat.value === selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </li>
          ))}
          <li><a href="/">← Back to Site</a></li>
          <li onClick={handleLogout} className="logout">Logout</li>
        </ul>
      </div>

      <div className="main-content">
        <h3>{categories.find(c => c.value === selectedCategory)?.label}</h3>

        {/* Form */}
        <div className="form-row">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input type="text" name="price" placeholder="Price" value={form.price} onChange={handleChange} />
          <input type="file" onChange={handleFileChange} />
          {(selectedFile || form.image) && (
            <img
              src={selectedFile ? URL.createObjectURL(selectedFile) : form.image}
              alt="preview"
              className="preview-img"
            />
          )}
          <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add Product'}</button>
          <button onClick={resetForm}>Clear</button>
        </div>

        {/* Table */}
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td><img src={p.image} alt={p.name} width="50" /></td>
                <td>
                  <button onClick={() => handleEdit(p)}>Edit</button>
                  <button onClick={() => handleDelete(p._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
